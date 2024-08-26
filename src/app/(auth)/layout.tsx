import { Col, Layout, Row } from "antd";
import { Content } from "antd/es/layout/layout";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Layout>
      <Content>
        <Row>
          <Col
            className="h-screen bg-[#141414] p-0 text-white"
            lg={12}
            md={0}
            sm={0}
            xl={12}
            xs={0}
          >
            <Row align="middle" className="!h-full !w-full" justify="center">
              <Col className="text-center">
                <h1 className="text-2xl font-bold">Logo</h1>
              </Col>
            </Row>
          </Col>
          <Col lg={12} md={24} sm={16} xl={12} xs={24}>
            <Row align="middle" justify="center">
              <Col className="px-12" span={24}>
                {children}
              </Col>
            </Row>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}
