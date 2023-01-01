export default props => {
  console.log(props);

  if (props.type === 'form') {
    const newData = {
      单行文本: '11',
    };

    props.onAdd(newData);
  }
};
