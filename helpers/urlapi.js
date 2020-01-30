// const URL_API = 'http://localhost:2020';
const URL_API = 'https://api.ngeles.co';

// const UI_LINK = 'https://ngeles.co'
const UI_LINK = 'http://localhost:3000'
// const UI_LINK = 'https://sharex.purwadhikax.com'

module.exports = {
    URL_API,
    UI_LINK
}



// onWhatsappClick = async () => {
//     await this.checkRefsInput();

//     console.log({
//       email: this.state.inputemail,
//       firstName: this.state.inputfirstname,
//       lastName: this.state.inputlastname,
//       phone: this.state.inputphone,
//       referral: this.state.inputpurwadhika,
//       hasRelative: this.state.inputrelative,
//       additional: this.state.inputinfo,
//       //
//       picEmail: this.state.picEmail,
//       product: this.state.productName,
//       date: this.state.date,
//       startTime: this.state.startTime,
//       endTime: this.state.endTime,
//       branch: this.state.branchName,
//       category: this.state.category,
//       //
//     });
//     if (this.state.validation === true) {
//       axios
//         .post(`${API_URL_1}/enquiry/create`, {
//           email: this.state.inputemail,
//           firstName: this.state.inputfirstname,
//           lastName: this.state.inputlastname,
//           phone: this.state.inputphone,
//           referral: this.state.inputpurwadhika,
//           hasRelative: this.state.inputrelative,
//           additional: this.state.inputinfo,
//           //
//           product: this.state.productName,
//           date: this.state.date,
//           startTime: this.state.startTime,
//           endTime: this.state.endTime,
//           branch: this.state.branchName,
//           category: this.state.category,
//           //
//         })
//         .then(res => {
//           if (this.state.mailchimpId) {
//             this.subscribeNewsletter();
//           }
//           let date = '';
//           if (this.state.date && this.state.endDate) {
//             date = moment(this.state.date).isSame(this.state.endDate)
//               ? `${moment(this.state.date).format('DD MMM YYYY')}`
//               : `${moment(this.state.date).format('DD MMM')} - ${moment(
//                   this.state.endDate,
//                 ).format('DD MMM YYYY')}`;
//             date += ` ${this.state.startTime} - ${this.state.endTime}`;
//           }
//           const whatsappMessage = window.encodeURIComponent(
//             `Hi, saya ${this.state.inputfirstname} ${this.state.inputlastname}.\nSaya tertarik dengan ${this.state.category} '${this.state.productName}'\n${date}\nPertanyaan:\n${this.state.inputinfo}`,
//           );
//           window.open(
//             `https://wa.me/${this.state.picPhone}?text=${whatsappMessage}`,
//             '_blank',
//           );
//         })
//         .catch(err => {
//           console.log(err);
//           alert(
//             'Sistem sedang bermasalah. Mohon kontak kami secara manual melalui workshop@purwadhika.com',
//           );
//         });
//     }
//   };