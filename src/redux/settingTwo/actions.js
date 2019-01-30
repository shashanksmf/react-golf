const actions = {
    load_data_setting: "LOAD_DATA_SETTING",
    getDataSetting: () => {
     // console.log("recollection called");
      return (dispatch) => {
       // console.log("dispatch called");
        dispatch({
          type: "GET_SETTING"
        })
      }
    }
  
  
  }
  
  export default actions