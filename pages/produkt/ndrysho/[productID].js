import { makeStyles } from "@material-ui/core/styles"
import { getSession } from "next-auth/client"
import dbConnection from "../../../utils/dbConnection"
import Product from '../../../models/Product'
import dynamic from 'next/dynamic'
import { FlashDispatchContext } from '../../../components/contexts/flashMsgs.context'
import Loader from '../../../components/Loader'

const EditPage = dynamic(
    () => import('../../../components/editPage/EditPage'),
    { ssr: false }
)

const styles = theme => ({
    root: {
        marginTop: '70px'
    }
})

const useStyles = makeStyles(styles)

export default function EditingPage({ product }) {
    const classes = useStyles()
    return (
        <div className={classes.root} >
            <EditPage product={product} />
        </div>
    )
}

function cleanObject(obj) {
    const data = { ...JSON.parse(obj) }
    delete data.__v
    delete data._id
    delete data.elasticSearch
    delete data.date
    delete data.favouritedBy
    delete data.rating
    delete data.slug
    if (data.photos.length) {
        data.images = data.photos.map(e => e.url)
    }
    data.photos = []
    data.toBeDeleted = []
    return data
}

export async function getServerSideProps(context) {
    try {
        const { productID } = context.query
        await dbConnection()
        const product = await Product.findById(productID)
        const req = context.req
        const session = await getSession({ req })
        if (!product) throw new Error()
        if (session.user._id !== product.seller.toString()) {
            return {
                props: {
                    product: {
                        notAuthorized: 400
                    }
                }
            }
        }
        return {
            props: {
                product: JSON.stringify(cleanObject(JSON.stringify(product)))
            }
        }
    } catch (e) {
        context.res.statuscode = 404
        console.log(e)
        return {
            props: {
                product: {
                    error: 404
                }
            }
        }
    }
}