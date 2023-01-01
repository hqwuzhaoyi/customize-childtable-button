import request from './request';

// 根据no查询生效时间内最新的模板
export const queryLastedVersionByNo = no =>
  request.get(
    `spreadjs/template/queryLastedVersionByNo?template_no=${no ?? ''}`
  );

// 根据主键data_id查询模板信息
export const queryByDataId = no =>
  request.get(`spreadjs/template/queryByDataId?data_id=${no ?? ''}`);

// 通过模版编号查询数据
export const queryByNoAndStatus = no =>
  request.get(`spreadjs/template/queryByNoAndStatus?template_no=${no ?? ''}`);
// 获取用户信息
export const getUser = () => request.get(`system/authority/user`);

// 录入新增/编辑数据
export const save = ({
  recordId,
  dataId,
  content,
  templateDataId,
  templateContent,
  templateHeaderContent,
  modelType,
  testItemsId,
  contentHistory,
  templateNo,
}) => {
  const params = {};

  params.data_id = dataId;
  params.foreignKey = recordId;
  params.content = content;
  params.template_data_id = templateDataId;
  params.template_content = templateContent;
  params.template_header_content = templateHeaderContent;
  params.model_type = modelType;
  params.contentHistory = contentHistory;
  params.template_no = templateNo;
  testItemsId && (params.sample_test_items_id = testItemsId);

  return new Promise((resolve, reject) => {
    request
      .post(`spreadjs/data/save`, params)
      .then(res => resolve(res))
      .catch(error => {
        reject(error);
      });
  });
};

export const FILE_UPLOAD_URL = `image/upload`;
export const upload = file =>
  request.post(FILE_UPLOAD_URL, file, {
    header: {
      'Content-Type': 'multipart/form-data',
    },
  });

// 获取PDF链接
export const exportOgPdf = params => request.post(`pdf/exportOgPdf`, params);
