export default props => {
  console.log('11111appInjector props----', props);

  if (props.type === 'form') {
    props.openFormModal({
      openType: 'modal',
      defaultValue: props.record?.additionalData?.[props.text],
      onOk: data => {
        console.log('data', data);
        props.onChangeAdditionalData(data);
      },
      moduleId: props.configValue.moduleId,
      dataId: undefined,
      modalProps: {
        visible: true,
        width: 720,
        height: 640,
      },
      isCopy: true,
    });
  }
  if (props.type === 'detail') {
    props.openFormModal({
      openType: 'modal',
      formId: '4917e03a-8423-4f86-a3c7-a2be90b09622',
      dataId: '1fb4014f24a1485ab9a52820ed4294aa',
      modalProps: {
        visible: true,
        width: 720,
        height: 640,
        title: '首页'
      },
    });

    // window.open(
    //   `/detail/view?id=${'9b822517-d447-47f8-8198-68d3c7f827db'}&dataId=${'2c0b1b60647c4ffaa1487ec127a3bf1e'}&appid=${'fae9355a-aaa4-cbca-a1b7-b6c233943dfb'}`
    // );
  }
};
