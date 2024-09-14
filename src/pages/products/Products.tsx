import { Breadcrumb, Button, Flex, Space, Form } from "antd";
import { Link } from "react-router-dom";
import { PlusOutlined, RightOutlined } from "@ant-design/icons";
import { useForm } from "antd/es/form/Form";
import ProductsFilter from "./ProductsFilter";

const Products = () => {
  const [filterForm] = useForm();
  return (
    <>
      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        <Flex justify="space-between">
          <Breadcrumb
            separator={<RightOutlined />}
            items={[
              { title: <Link to="/">Dashboard</Link> },
              { title: "Producrs" },
            ]}
          />
        </Flex>
        <Form form={filterForm} onFieldsChange={() => {}}>
          <ProductsFilter>
            <Button onClick={() => {}} type="primary" icon={<PlusOutlined />}>
              Add Product
            </Button>
          </ProductsFilter>
        </Form>
      </Space>
    </>
  );
};

export default Products;
