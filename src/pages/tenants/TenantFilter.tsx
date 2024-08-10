import { Card, Col, Form, Input, Row } from "antd";

type TenantsFilterProps = {
  children?: React.ReactNode;
  onFilterChange: (filterName: string, filterValue: string) => void;
};

const TenantFilter = ({ children, onFilterChange }: TenantsFilterProps) => {
  return (
    <Card>
      <Row justify="space-between">
        <Col span={16}>
          <Row gutter={20}>
            <Col span={12}>
              <Form.Item name="q">
                <Input.Search
                  onChange={(e) =>
                    onFilterChange("searchFilter", e.target.value)
                  }
                  allowClear={true}
                  placeholder="Search"
                />
              </Form.Item>
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

export default TenantFilter;
