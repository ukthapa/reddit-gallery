import React, { createContext, Component } from 'react';
import axios from 'axios';

export const DataContext = createContext();

class DataContextProvider extends Component {
	state = {
		dataList: [],
		isLoading: true,
		detailInfo: {},
		filter: {},
	}

	getData() {
		axios
			.get("https://www.reddit.com/r/pics/.json?jsonp=")
			.then(response => response.data.data.children.map(imageinfo => ({
				id: imageinfo.data.id,
				title: imageinfo.data.title,
				thumbnail: imageinfo.data.thumbnail,
				thumbnailWidth: imageinfo.data.thumbnail_width,
				thumbnailHeight: imageinfo.data.thumbnail_height,
				imageURL: imageinfo.data.url,
				author: imageinfo.data.author,
				description: imageinfo.data.selftext,
				score: imageinfo.data.score,
				totalAwards: imageinfo.data.total_awards_received,
				}))).then(dataList => {
				this.setState({
					dataList,
					isLoading: false
				})
			})
			.catch(error => this.setState({ error, isLoading: false }));
	}

	componentDidMount() {
		this.getData();
	}

	getDetail = (id) => {
		const imageDetail = this.state.dataList.find(item => item.id === id);
		return imageDetail;
	};

	handleDetail = (id) => {
		const imageDetail = this.getDetail(id);
		this.setState(()=>{
			return {
				detailInfo:imageDetail
			}
		})
	};

	updateFilter = filter => {
		this.setState({
		  filter
		})
	};

	static applyFilter(listings, filter) {
		const { sortOrder } = filter
		let result = listings
		if (sortOrder) {
			if (sortOrder === 'assending') {
			  result = result.sort((a, b) => {
				  return (a.title).localeCompare(b.title)
			  })
			}
			if (sortOrder === 'descending') {
			  result = result.sort((a, b) => {
				return (b.title).localeCompare(a.title)
			  })
			}
		  }
  		return result
	};


	render() {
		const { dataList, filter } = this.state
		DataContextProvider.applyFilter(
			dataList,
			filter
		)
		return (
			<DataContext.Provider value={{
				...this.state,
				handleDetail: this.handleDetail,
				updateFilter: this.updateFilter,
			}}>
				{this.props.children}
			</DataContext.Provider>
		)
	}
}

const DataContextConsumer = DataContext.Consumer;

export  { DataContextProvider, DataContextConsumer }
