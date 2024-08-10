import { Row, Col, Card, Input, Form, Space, Select } from "antd";
import { getTenants } from "../../../http/api";
import { useQuery } from "@tanstack/react-query";
import { Tenant } from "../../../types";

const UserForm = () => {
  const { data: tenants } = useQuery({
    queryKey: ["tenants"],
    queryFn: () => {
      // TODO: make this dynamic, like search for tenants in the input
      return getTenants().then((res) => res.data);
    },
  });

  console.log("tenants", tenants);

  return (
    <Row>
      <Col span={24}>
        <Space direction="vertical" size="large">
          <Card title="Basic info">
            <Row gutter={20}>
              <Col span={12}>
                <Form.Item label="First name" name="firstName">
                  <Input size="large" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Last name" name="lastName">
                  <Input size="large" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Email" name="email">
                  <Input size="large" />
                </Form.Item>
              </Col>
            </Row>
          </Card>
          <Card title="Security info">
            <Row gutter={20}>
              <Col span={12}>
                <Form.Item label="Password" name="password">
                  <Input size="large" type="password" />
                </Form.Item>
              </Col>
            </Row>
          </Card>
          <Card title="Role" bordered={false}>
            <Row gutter={20}>
              <Col span={12}>
                <Form.Item label="Role" name="role">
                  <Select
                    size="large"
                    style={{ width: "100%" }}
                    allowClear={true}
                    onChange={() => {}}
                    placeholder="Select role"
                  >
                    <Select.Option value="admin">Admin</Select.Option>
                    <Select.Option value="manager">Manager</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Restaurant" name="tenantId">
                  <Select
                    size="large"
                    style={{ width: "100%" }}
                    allowClear={true}
                    onChange={() => {}}
                    placeholder="Select restaurant"
                  >
                    {tenants?.map((tenant: Tenant) => (
                      <Select.Option value={tenant.id} key={tenant.id}>
                        {tenant.name}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
            </Row>
          </Card>
        </Space>
      </Col>
    </Row>
  );
};

export default UserForm;
