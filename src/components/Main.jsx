import Favoruites from "./favoruites/Favoruites";
import Loading from "./loading/Loading";
import MyChart from "./mychart/MyChart";
import Order from "./order/Order";
import Pricing from "./pricing/Pricing";
import Product from "./product/Product-stock";
import Slider from "./products/Products";
import Inbox from "./sidebar2/Sidebar2";


export default function Main({ page = 'dashboard' }) {
    let Component = <MyChart />;

    if (page === "products") {
        Component = <Slider />;
    } else if (page === "favoruites") {
        Component = <Favoruites />;
    } else if (page === "inbox") {
        Component = <Inbox />;
    } else if (page === "order") {
        Component = <Order />;
    } else if (page === "product") {
        Component = <Product />;
    } else if (page === "pricing") {
        Component = <Pricing />
    } else if (page === "calendar") {
        Component = <Loading />
    } else if (page === "to-do") {
        Component = <Loading />
    } else if (page === "contact") {
        Component = <Loading />
    } else if (page === "invoice") {
        Component = <Loading />
    } else if (page === "ui-elements") {
        Component = <Loading />
    } else if (page === "team") {
        Component = <Loading />
    } else if (page === "table") {
        Component = <Loading />
    }

    return Component;
}
