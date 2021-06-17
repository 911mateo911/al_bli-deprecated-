import dbConnection from "../../utils/dbConnection";
import Product from "../../models/Product";
import { AirlineSeatIndividualSuiteRounded } from "@material-ui/icons";

export default async function handler(req, res) {
  try {
    await dbConnection();
    function slugify(str) {
      const slugArr = str.split(" ");
      return slugArr.join("_").toLowerCase();
    }
    const { data } = req.body;
    const newProduct = new Product(data)
    newProduct.slug = slugify(data.title)
    await newProduct.save()
    res.send({
      message: "success",
    })
  } catch (e) {
    res.send({
      message: 'error'
    })
  }
}
