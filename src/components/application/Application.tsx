import * as React from "react";
import { Details } from "../details/Details";
import {
  Popover,
  Menu,
  Position,
  Icon,
  Button,
  majorScale
} from "evergreen-ui";
import "./Application.scss";

export function Application() {
  return (
    <div className="Application">
      <div className="top">
        <div className="logo" />
      </div>
      <div className="welcome">FuseBox ❤️ JSX/TSX </div>

      <Popover
        position={Position.BOTTOM_LEFT}
        content={
          <Menu>
            <Menu.Group>
              <Menu.Item icon="plus">Create Project</Menu.Item>
              <Menu.Item icon="projects">Manage Projects</Menu.Item>
            </Menu.Group>
            <Menu.Divider />
            <Menu.Group>
              <Menu.Item icon="badge">Roles</Menu.Item>
              <Menu.Item icon="people">Users</Menu.Item>
            </Menu.Group>
          </Menu>
        }
      >
        <Button>Show</Button>
      </Popover>

      <Details />
    </div>
  );
}
