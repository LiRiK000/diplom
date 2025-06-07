import { Card, Typography, Button, Avatar, Tag, Space, Rate } from 'antd';
import { EditOutlined, PlusOutlined, UserOutlined } from '@ant-design/icons';
import { productList, users } from './const';

const { Title, Text } = Typography;

export const ProfilePage = () => {
  const user = users[0];

  return (
    <div
      style={{
        display: 'flex',
        gap: 24,
        padding: 24,
        minHeight: '100vh',
        boxSizing: 'border-box',
        backgroundColor: '#f0f2f5',
      }}
    >
      <div
        style={{
          width: 320,
          display: 'flex',
          flexDirection: 'column',
          gap: 24,
        }}
      >
        <Card style={{ flexShrink: 0 }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginBottom: 16,
            }}
          >
            <Avatar
              size={80}
              icon={<UserOutlined />}
              src={user.avatar}
              style={{ marginBottom: 8 }}
            />
            <Text strong>{user.username}</Text>
            <Text type="secondary" style={{ marginTop: 4 }}>
              {user.email}
            </Text>
          </div>

          <Space
            size="middle"
            style={{
              justifyContent: 'center',
              width: '100%',
              marginBottom: 16,
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <Text strong>{user.createdAt}</Text>
              <br />
              <Text type="secondary">Дата регистрации</Text>
            </div>
          </Space>

          <div style={{ textAlign: 'center', marginBottom: 16 }}>
            <Tag color={user.isAdmin ? 'purple' : 'blue'}>
              {user.isAdmin ? 'Администратор' : 'Пользователь'}
            </Tag>
          </div>

          <Card type="inner" title="Настройки профиля">
            <div style={{ marginBottom: 12 }}>
              <Text type="secondary">Имя пользователя</Text>
              <input
                defaultValue={user.username}
                className="form-control"
                style={{ marginTop: 8 }}
              />
            </div>
            <div style={{ marginBottom: 12 }}>
              <Text type="secondary">Email</Text>
              <input
                defaultValue={user.email}
                className="form-control"
                style={{ marginTop: 8 }}
              />
            </div>
            <div style={{ marginBottom: 12 }}>
              <Text type="secondary">Новый пароль</Text>
              <input className="form-control" style={{ marginTop: 8 }} />
            </div>
            <div style={{ marginBottom: 16 }}>
              <Text type="secondary">Старый пароль</Text>
              <input className="form-control" style={{ marginTop: 8 }} />
            </div>
            <Button icon={<EditOutlined />} block>
              Сохранить
            </Button>
          </Card>
        </Card>
      </div>

      <div
        style={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Card
          title={
            <Space>
              <Text strong style={{ fontSize: 18 }}>
                Мои товары
              </Text>
            </Space>
          }
          extra={
            <Button type="primary" icon={<PlusOutlined />}>
              Добавить товар
            </Button>
          }
          style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 16,
              marginTop: 16,
            }}
          >
            {productList.map((product) => (
              <Card
                key={product.id}
                hoverable
                cover={<img alt={product.title} src={product.img} />}
                style={{
                  flex: '1 1 calc(33% - 16px)',
                  display: 'flex',
                  flexDirection: 'column',
                  minWidth: 240,
                  maxWidth: 320,
                }}
              >
                <Title level={5} style={{ marginBottom: 8 }}>
                  {product.title}
                </Title>
                <Text strong>{product.price.toLocaleString()} ₽</Text>

                <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center' }}>
                  <Rate disabled defaultValue={product.rating} />
                  <Text type="secondary" style={{ marginLeft: 8 }}>
                    ({product.rating})
                  </Text>
                </div>
              </Card>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};
