import { Row, Col, Card, Input, Form } from "antd";

const UserForm = () => {
  return (
    <Row>
      <Col span={24}>
        <Card title="Basic info">
          <Row gutter={20}>
            <Col span={12}>
              <Form.Item label="First name" name="firstName">
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Last name" name="lastName">
                <Input />
              </Form.Item>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default UserForm;
