import React from "react"
import { Button, DatePicker, Switch, TimePicker, version } from "antd";

const ComponentTest = (props) => {
  return (
    <React.Fragment>
      <h1>Ant Design version: {version}</h1>
      <div>
        <DatePicker />
        <Button type="primary" style={{ marginLeft: 8 }}>
          Primary Button
        </Button>
      </div>
      <div style={{ marginTop: 16 }}>
        <TimePicker size="large" />
        <Switch checkedChildren={props.checked} unCheckedChildren={props.unchecked} style={{ marginLeft: 8 }} />
      </div>
      <div>

      </div>
    </React.Fragment>
  )
}

export default ComponentTest



