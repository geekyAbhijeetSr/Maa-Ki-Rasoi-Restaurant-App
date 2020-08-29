import React from 'react'
import MenuItem from './MenuItem'
import './menuPage.scss'

class MenuPage extends React.Component {
    state = {
        menuItem: this.props.menuItem,
        items: [
            {
                heading: 'Soup',
                ctg: 'soup',
            },
            {
                heading: 'Starter',
                ctg: 'starter',
            },
            {
                heading: 'Subzi',
                ctg: 'subzi',
            },
            {
                heading: 'Dal',
                ctg: 'dal',
            },
            {
                heading: 'Bread',
                ctg: 'bread',
            },
            {
                heading: 'Rice / Pulao / Biryani / Raita',
                ctg: 'rice',
            },
            {
                heading: 'Desert',
                ctg: 'desert',
            },
            {
                heading: 'Thali',
                ctg: 'thali',
            }
        ],
        selectedCtg: 'all',
        selectedSorting: 'default',
    }

    items = (ctg) => {
        const { menuItem } = this.state
        return (
            menuItem.filter((item) => item.category === ctg).map((item) => {
                return (
                    <MenuItem key={item.id} item={item} {...this.props} />
                )
            })
        )
    }

    itemCtg = (heading, ctg, index) => {
        return (
            <div className='menu-block' key={index}>
                <h1>{heading}</h1>
                <div className='preview-items'>                         {this.items(ctg)}
                </div>
            </div>
        )
    }

    ChangeHandler = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }


    componentDidUpdate(prevProps, prevState) {

        const { menuItem, selectedSorting } = this.state

        if (prevState.selectedSorting !== selectedSorting) {
            if (selectedSorting === 'default') { 
                this.setState({
                    menuItem: this.props.menuItem,
                })
            }
            else if (selectedSorting === 'pltoh') {
                const sortedItems = menuItem.sort((a, b) => {
                    return a.price - b.price
                })
                this.setState({
                    menuItem: sortedItems,
                })
            }
            else if (selectedSorting === 'phtol') {
                const sortedItems = menuItem.sort((a, b) => {
                    return b.price - a.price
                })
                this.setState({
                    menuItem: sortedItems,
                })
            }
        }
    }



    render() {
        const previewItems = this.state.items.filter((item) => item.ctg === this.state.selectedCtg || this.state.selectedCtg === 'all')
            .map((item, index) => {
                return this.itemCtg(item.heading, item.ctg, index)
            })
        return (
            <div className='container menuPage'>
                <div className='filterAndSorting'>
                    <div>
                        <label htmlFor="ctg">Filter by</label>
                        <select
                            id='ctg'
                            name="selectedCtg"
                            value={this.state.selectedCtg}
                            onChange={this.ChangeHandler}>
                            <option value="all">All</option>
                            <option value="soup">Soup</option>
                            <option value="starter">Starter</option>
                            <option value="subzi">Subzi</option>
                            <option value="dal">Dal</option>
                            <option value="bread">Bread</option>
                            <option value="rice">Rice / Pulao / Biryani / Raita</option>
                            <option value="desert">Desert</option>
                            <option value="thali">Thali</option>
                        </select>
                    </div>


                    <div>
                        <label htmlFor="sort">Sort by</label>
                        <select
                            id='sort'
                            name="selectedSorting"
                            value={this.state.selectedSorting}
                            onChange={this.ChangeHandler}>
                            <option value="default">Default</option>
                            <option value="pltoh">Price low to high</option>
                            <option value="phtol">Price high to low</option>
                        </select>
                    </div>

                </div>
                <div>
                    {previewItems}
                </div>

            </div>
        )
    }

}

export default MenuPage