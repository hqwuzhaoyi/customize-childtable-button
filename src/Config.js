/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { Form, Input } from 'antd';
import { useSetState } from 'ahooks';

const Config = ({ configValue, changeConfigValue }) => {
  const [state, setState] = useSetState(configValue ?? {});
  const changeWidth = e => {
    setState({ width: e.target.value });
  };
  const changeHeight = e => {
    setState({ height: e.target.value });
  };
  const changemoduleId = e => {
    setState({ moduleId: e.target.value });
  };

  useEffect(() => {
    changeConfigValue(state);
  });

  return (
    <div>
      <Form.Item
        label="宽度"

        // rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input onChange={changeWidth} defaultValue={state.width} />
      </Form.Item>
      <Form.Item
        label="高度"
        // rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input onChange={changeHeight} defaultValue={state.height} />
      </Form.Item>
      <Form.Item
        label="表单ID"
        // rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input onChange={changemoduleId} defaultValue={state.moduleId} />
      </Form.Item>
    </div>
  );
};
export default Config;
