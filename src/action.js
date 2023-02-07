import { querySunDataId } from './api/asset';

export default props => {
  console.log('11111appInjector props----', props);

  if (props.type === 'form') {
    querySunDataId({
      formId: props.childTableProps.formCenterInstance.formId,
      subTableCompId: props.childTableProps.id,
      dataId: props.record[props.childTableProps.primaryKey],
      type: 'form',
    }).then(res => {
      props.openFormModal({
        openType: 'modal',
        defaultValue: props.record?.additionalData?.[props.text],
        onOk: data => {
          console.log('data', data);
          data.responseDetail = props.responseDetail;
          data.operationType = !res.data ? 'insert' : 'edit';
          props.onChangeAdditionalData(data);
        },
        moduleId: props.configValue.sunTableFormId,
        dataId: res.data,
        modalProps: {
          visible: true,
          width: props.configValue?.width ?? 720,
          height: props.configValue?.height ?? 640,
          title: props.configValue?.title ?? '表单',
        },
        isCopy: props.childTableProps.isCopy,
      });
    });
  }
  if (props.type === 'detail') {
    querySunDataId({
      formId: props.btnInfo.modelId,
      subTableCompId: props.childTableProps.id,
      dataId: props.record[props.childTableProps.primaryKey],
      type: 'detail',
    }).then(res => {
      props.openFormModal({
        openType: 'modal',
        formId: props.configValue.sunTableFormId,
        dataId: res.data,
        modalProps: {
          visible: true,
          width: props.configValue?.width + 'px' ?? 720,
          height: props.configValue?.height + 'px' ?? 640,
          title: props.configValue?.title ?? '表单',
        },
      });
    });

    // window.open(
    //   `/detail/view?id=${'9b822517-d447-47f8-8198-68d3c7f827db'}&dataId=${'2c0b1b60647c4ffaa1487ec127a3bf1e'}&appid=${'fae9355a-aaa4-cbca-a1b7-b6c233943dfb'}`
    // );
  }
};
