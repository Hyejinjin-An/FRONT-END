import { Avatar, Button, Menu, Portal, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { logout } from "../services/auth";

export default function MenuWithAvatar() {
  
  const handleLogout = async () => {
    
  }
  return (
    <Menu.Root>
      <Menu.Trigger>
        {/* TODO 아바타 작성 */}
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content borderRadius="lg">
          {/* TODO 메뉴 작성 */}
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  )
}