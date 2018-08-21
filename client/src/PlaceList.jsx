import React,{ Component } from 'react';
import axios from 'axios';
import styles from '../dist/style.css';
import PlaceEntry from './PlaceEntry.jsx';
import { Icon } from 'react-icons-kit';
import { cutlery } from 'react-icons-kit/fa/cutlery';
import { ic_local_cafe } from 'react-icons-kit/md/ic_local_cafe';
import { icecream } from 'react-icons-kit/ionicons/icecream'
import { ic_local_bar } from 'react-icons-kit/md/ic_local_bar';
import { ic_local_mall } from 'react-icons-kit/md/ic_local_mall';
import { hotel } from 'react-icons-kit/fa/hotel';
import { ic_account_balance } from 'react-icons-kit/md/ic_account_balance';
import { ic_more_horiz } from 'react-icons-kit/md/ic_more_horiz';
import { androidSearch } from 'react-icons-kit/ionicons/androidSearch';
import { ic_today } from 'react-icons-kit/md/ic_today';

export default class PlaceList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: 'Starbucks',
      mainCategory: 'qui',
      subCategories: 'Cafe',
      city: 'Boehmland',
      places: []
    };
  }
  
  componentDidMount () {
    this.getRestaurants();
    // console.log('component mounted!');
  }

  getRestaurants () {
    let { mainCategory } = this.state;
    let { city } = this.state;
    axios.get(`http://localhost:3000/api/also-viewed/${mainCategory}/${city}`/*, payload*/)
    .then(res => {
      console.log(res.data)
      if (res.data.length) {
        this.setState({places: res.data.slice(0, 10)});
      } else {
        console.log('No data');
      }
    })
    .catch(err => console.log('error sending get request to server: ', err));
  }

  render () {
    let { places } = this.state;
    return (
      <div className={styles.main}>
        <h3>People also viewed</h3>
        {this.state.places.length > 0 && (
          <span className={styles.list}>
            {places.map((place, index) => <PlaceEntry key={index} place={place} />)}
          </span>
        )}
        <h3>Other places nearby</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}><a href="/ADD-LINK-FOR-SIMILAR-NEARBY-BUSINESSES">
            Find more {this.state.mainCategory} Restaurants near {this.state.restaurant}
          </a></li>
          <li className={styles.listItem}><a href="/ADD-LINK-FOR-SIMILAR-NEARBY-BUSINESSES">
            Find more {this.state.subCategories} Restaurants near {this.state.restaurant}
          </a></li>
        </ul>
        <h3>Browse nearby</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <a href="/ADD-LINK"><span className={styles.icon}><Icon size={18} icon={cutlery} /></span>Restaurants</a>
          </li>
          <li className={styles.listItem}>
            <a href="/ADD-LINK"><span className={styles.icon}><Icon size={18} icon={ic_local_cafe} /></span>Cafes</a>
          </li>
          <li className={styles.listItem}>
            <a href="/ADD-LINK"><span className={styles.icon}><Icon size={18} icon={icecream} /></span>Food</a>
          </li>
          <li className={styles.listItem}>
            <a href="/ADD-LINK"><span className={styles.icon}><Icon size={18} icon={ic_local_bar} /></span>Bars</a>
          </li>
          <li className={styles.listItem}>
            <a href="/ADD-LINK"><span className={styles.icon}><Icon size={18} icon={ic_local_mall} /></span>Shopping</a>
          </li>
          <li className={styles.listItem}>
            <a href="/ADD-LINK"><span className={styles.icon}><Icon size={18} icon={hotel} /></span>Hotels</a>
          </li>
          <li className={styles.listItem}>
            <a href="/ADD-LINK"><span className={styles.icon}><Icon size={18} icon={ic_account_balance} /></span>Landmarks</a>
          </li>
          <li className={styles.listItem}>
            <a href="/ADD-LINK"><span className={styles.icon}><Icon size={18} icon={ic_more_horiz} /></span>Show all</a>
          </li>
        </ul>

        <h3>Dining in {this.state.city}</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>
          <a href="/ADD-LINK"><span className={styles.icon}><Icon size={18} icon={androidSearch} /></span>
            Search for reservations</a>
          </li>
          <li className={styles.listItem}>
          <a href="/ADD-LINK"><span className={styles.icon}><Icon size={18} icon={ic_today} /></span>
            Book a Table in {this.state.city}</a>
          </li>
        </ul>
        <h3>Best of {this.state.city}</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}><a href="/ADD-LINK">Things to do in {this.state.city}</a></li>
        </ul>
        {/* <button onClick={(e) => {this.createData(e)}}>Click To Create Fake Data</button> */}
      </div>
    )
  }
}