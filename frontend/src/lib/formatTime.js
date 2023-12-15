import moment from "moment";
moment.locale("es");

const formatTime = (time) => {
  return moment(time).format("LL");
};

export default formatTime;
