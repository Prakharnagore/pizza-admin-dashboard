import {
  Card,
  Col,
  Form,
  Input,
  Row,
  Select,
  Space,
  Switch,
  Typography,
} from "antd";

type ProductsFilterProps = {
  children?: React.ReactNode;
};

const ProductsFilter = ({ children }: ProductsFilterProps) => {
  return (
    <Card>
      <Row justify="space-between">
        <Col span={16}>
          <Row gutter={20}>
            <Col span={6}>
              <Form.Item name="q">
                <Input.Search allowClear={true} placeholder="Search" />
              </Form.Item>
            </Col>

            <Col span={6}>
              <Form.Item name="categoryId">
                <Select
                  style={{ width: "100%" }}
                  allowClear={true}
                  placeholder="Select category"
                ></Select>
              </Form.Item>
            </Col>

            <Col span={6}>
              <Form.Item name="tenantId">
                <Select
                  style={{ width: "100%" }}
                  allowClear={true}
                  placeholder="Select restaurant"
                ></Select>
              </Form.Item>
            </Col>

            <Col span={6}>
              <Space>
                <Form.Item name="isPublish">
                  <Switch defaultChecked={false} onChange={() => {}} />
                </Form.Item>
                <Typography.Text style={{ marginBottom: 22, display: "block" }}>
                  Published
                </Typography.Text>
              </Space>
            </Col>
          </Row>
        </Col>
        <Col span={8} style={{ display: "flex", justifyContent: "end" }}>
          {children}
        </Col>
      </Row>
    </Card>
  );
};

export default ProductsFilter;
