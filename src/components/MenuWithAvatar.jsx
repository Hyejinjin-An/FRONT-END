import { Avatar, Button, Menu, Portal, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { logout } from "../service/auth";

export default function MenuWithAvatar() 
{
  const v = useContext(AuthContext) // v = {user:user, setUser:setUser}
  const handleLogout = async () => {
    await logout()
  }
  return (
    <Menu.Root>
      <Menu.Trigger>

        {/* TODO 아바타 작성 */}
        <Avatar.Root size='sm'>
          <Avatar.Fallback name={v.displayName || v.email }/>
          <Avatar.Image src={v.photoUrl} />
        </Avatar.Root>

      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content borderRadius="lg">

          {/* TODO 메뉴 작성 */}
          <Menu.Item
            value="profile"
            pointerEvents="none"
          >
            <Text>안녕하세요, {v.displayName || v.email}</Text>
          </Menu.Item>

          {/* 구분선 추가 */}
          <Menu.Separator />

          <Menu.Item value="logout" asChild>
            <Button
              width="100%"
              borderRadius="full"
              variant="outline"
              onClick={handleLogout}
            >
              로그아웃
            </Button>
          </Menu.Item>
        
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  )
}