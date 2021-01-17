import React, {Component} from "react";
import "./contacts.css";
import {Link} from "react-router-dom";
import ViewContact from "../ViewContact/ViewContact";

const contactsMock = [{
   firstName: "Барней",
   lastName: "Стинсовський",
   phone: "+380956319521",
   gender: "male"
 }, {
   firstName: "Робін",
   lastName: "Щербатська",
   phone: "+380931460123",
   gender: "female"
 }, {
   firstName: "Анонімний",
   lastName: "Анонімус",
   phone: "+380666666666"
 }, {
   firstName: "Лілія",
   lastName: "Олдровна",
   phone: "+380504691254",
   gender: "female"
 }, {
   firstName: "Маршен",
   lastName: "Еріксонян",
   phone: "+380739432123",
   gender: "male"
 }, {
   firstName: "Теодор",
   lastName: "Мотсбес",
   phone: "+380678123456",
   gender: "male"
 }];

function getMFIcon(str) {
  let sign = "";
  switch (str) {
    case 'male': sign = "\u2642"; break;
    case 'female': sign = "\u2640"; break;
  }
  return sign;
}

export default class Contacts extends Component {
  state = {
    contacts: [...contactsMock], // TODO: Remove Mock
    filtered: [...contactsMock],
    clicked: [],
    search: '',
    isMale: true,
    isFemale: true,
    isUnisex: true
  };

  isMale = async() => {
    await this.setState( {isMale: !this.state.isMale});
    this.filterData();
  };

  isFemale = async() => {
    await this.setState({ isFemale: !this.state.isFemale });
    this.filterData();
  };

  isUnisex = async() => {
    await this.setState({ isUnisex: !this.state.isUnisex });
    this.filterData();
  };

  handleSearchChange = async (ev) => {
    await this.setState({search: ev.target.value});
    this.filterData();
  };

  filterData = async() => {
    await this.setState(() => {
      const searchLwr = this.state.search.toLowerCase();
      const fltr = this.state.contacts.filter(man =>
        ((man.gender === 'male') && this.state.isMale) ||
        ((man.gender === 'female') && this.state.isFemale) ||
        ((man.gender === undefined) && this.state.isUnisex))
        .filter(item =>
          item.firstName.toLowerCase().includes(searchLwr) ||
          item.lastName.toLowerCase().includes(searchLwr) ||
          item.phone.toLowerCase().includes(searchLwr));
      console.log(fltr);
      return {
        filtered: [...fltr],
      }
    });
  }

  render() {
    return (
      <div className="bg">
        <div className="container">
          <div className="search">
            <input className="search__btn" type="search" placeholder="Search..." value={this.state.search}
                   onChange={this.handleSearchChange}>
            </input>
            <label className="check" id="man" onChange={this.isMale}>
              <input type="checkbox" name="man" checked={this.state.isMale}></input>
              ♂
            </label>
            <label className="check" id="woman" onChange={this.isFemale}>
              <input type="checkbox" name="woman" checked={this.state.isFemale}></input>
              ♀
            </label>
            <label className="check" id="unisex" onChange={this.isUnisex}>
              <input type="checkbox" name="unisex" checked={this.state.isUnisex}></input>
              undefined
            </label>
          </div>
          <div className="header">
            <span className="name">First Name</span>
            <span className="name">Last Name</span>
            <span className="phone">Phone</span>
            <span className="sex">Sex</span>
          </div>
            { this.state.filtered.map( (cnt) => (
              <Link to={{
                  pathname: `/contact/${cnt.lastName}`,
                  data: {cnt},
                }}>
                <div className="contacts">
                  <span className="name">{cnt.firstName}</span>
                  <span className="name">{cnt.lastName}</span>
                  <span className="phone">{cnt.phone}</span>
                  <span className="sex">{getMFIcon(cnt.gender)}</span>  {/*  ♀ ♂ ⚲ ♂ ♀ 👩 👨 */}
                </div>
              </Link>
            ))}
        </div>
      </div>
    );
  }
};
