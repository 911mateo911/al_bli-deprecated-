import { makeStyles } from "@material-ui/core/styles"
import dbConnection from "../../../utils/dbConnection"
import Product from '../../../models/Product'
import EditPage from '../../../components/editPage/EditPage'

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

export async function getServerSideProps(context) {
    try {
        const { productID } = context.query
        await dbConnection()
        const product = await Product.findById(productID)
        if (!product) throw new Error()
        return {
            props: {
                product: JSON.stringify(product)
            }
        }
    } catch (e) {
        context.res.statuscode = 404
        return {
            props: {
                product: {
                    error: 404
                }
            }
        }
    }
}