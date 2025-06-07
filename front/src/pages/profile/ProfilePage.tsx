import { Card, Row, Col, Typography, Button, Avatar, Tag, Space, Rate } from 'antd';
import { EditOutlined, PlusOutlined, UserOutlined } from '@ant-design/icons';
import { tovarList, users } from './const';

const { Title, Text } = Typography;

export const ProfilePage = () => {

    const user= users[0]



  return (
    <Row gutter={24}>
      <Col span={6}>
        <Card className="text-center">
          <div style={{ marginBottom: 16 }}>
            <Avatar
              size={80}
              icon={<UserOutlined />}
              src={user.avatar}
              style={{ marginBottom: 8 }}
            />
            <div>
              <Text strong>{user.name}</Text>
              <br />
              <Text type="secondary">{user.email}</Text>
            </div>
          </div>

          <Space size="middle" style={{ marginBottom: 8 }}>
            <div>
              <br />
            </div>
            <div>
              <Text strong>{user.registrationDate}</Text>
              <br />
              <Text type="secondary">Дата регистрации</Text>
            </div>
          </Space>

          <div style={{ marginBottom: 16 }}>
            <Tag color="purple">Администратор</Tag>
          </div>

          <Card type="inner" title="Настройки профиля">
            <Text type="secondary">Имя пользователя</Text>
            <div style={{ marginTop: 8, marginBottom: 8 }}>
              <input defaultValue={user.name} className="form-control" />
            </div>
            <Text type="secondary">email</Text>
                <div style={{ marginTop: 8, marginBottom: 8 }}>
              <input defaultValue={user.email} className="form-control" />
            </div>
            <Text type="secondary">Новый пароль</Text>
 <div style={{ marginTop: 8, marginBottom: 8 }}>
              <input  className="form-control" />
            </div>
            <Text type="secondary">Старый пароль</Text>
 <div style={{ marginTop: 8, marginBottom: 8 }}>
              <input  className="form-control" />
            </div>
            <Button icon={<EditOutlined />} block>
              Сохранить
            </Button>
          </Card>
        </Card>
      </Col>

      <Col span={18}>
        <Card
          title={
            <Space>
              <Text strong style={{ fontSize: '18px' }}>
              Мои товары
              </Text>
            </Space>
          }
          extra={
            <Button type="primary" icon={<PlusOutlined />}>
              Добавить товар
            </Button>
          }
        >
         <Row gutter={[16, 16]} style={{ display: 'flex', flexWrap: 'wrap' }}>
  {tovarList.map((product) => (
    <Col span={8} key={product.id} style={{ display: 'flex' }}>
      <Card
        cover={<img alt={product.title} src={product.img} />}
        hoverable
        style={{ flex: 1, display: 'flex', flexDirection: 'column' }}
      >
        <Title level={5}>{product.title}</Title>
        <Text strong>{product.price.toLocaleString()} ₽</Text>
        <div style={{ marginTop: 'auto' }}>
          <Rate disabled defaultValue={product.rating} />
          <Text type="secondary" style={{ marginLeft: 8 }}>
            ({product.rating})
          </Text>
        </div>
      </Card>
    </Col>
  ))}
</Row>
        </Card>
      </Col>
    </Row>
  );
};
