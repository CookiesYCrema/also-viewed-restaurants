import React,{Component} from 'react';
import styles from '../dist/style.css';

export default class PlaceEntry extends Component {
  constructor (props) {
    super(props);
    this.state = {
    };
    this.handlePrice = this.handlePrice.bind(this);
    this.handleRating = this.handleRating.bind(this);
  }

  handlePrice (price) {
    let dollars = '';
    for (let i = 0; i < price; i++) {
      dollars += '$';
    }
    return dollars;
  }

  handleRating (rating) {
    let starRating;
    if (rating === 1) {starRating = styles.star1}
    else if (rating === 1.5) {starRating = styles.star15}
    else if (rating === 2) {starRating = styles.star2}
    else if (rating === 2.5) {starRating = styles.star25}
    else if (rating === 3) {starRating = styles.star3}
    else if (rating === 3.5) {starRating = styles.star35}
    else if (rating === 4) {starRating = styles.star4}
    else if (rating === 4.5) {starRating = styles.star45}
    else if (rating === 5) {starRating = styles.star5}
    return <span className={[styles.stars, starRating].join(' ')}></span>

  }

  render () {
    return (
      <div>
        <li className={styles.businessLi}>
          <img className={styles.thumbnail} src={this.props.place.img} />
          <div className={styles.businessInfo}>
            <strong><a href="/ADD-LINK-FOR-BUSINESS-IN-DB">
              {this.props.place.name.charAt(0).toUpperCase() + this.props.place.name.slice(1)}
              </a>
            </strong>
            <br /> 
            <span className={styles.info1}>
              {this.handleRating(this.props.place.rating)}
              <span className={styles.reviews}>{this.props.place.reviews}  reviews</span>
            </span>
            <br />
            <span className={styles.info2}>
              {this.handlePrice(this.props.place.price)} <span className={styles.descDot}>•</span> 
              {this.props.place.mainCategory}, {this.props.place.subCategories}
              <br />
              {this.props.place.city}
            </span>
          </div>
        </li>
      </div>
    )
  }
}
