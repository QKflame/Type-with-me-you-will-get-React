import React from 'react'
import { DatePicker, Input } from 'antd'
class Contact extends React.Component {
  render() {
    return (
      <div>
        <h2>GOT QUESTIONS</h2>
        <p>
          The easiest thing to do is post on our{' '}
          <a href="https://www.baidu.com">GitHub</a>.
        </p>
        <DatePicker></DatePicker>
        <Input placeholder="请输入数字" ></Input>
      </div>
    )
  }
}

export default Contact
