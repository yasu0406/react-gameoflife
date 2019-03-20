import React from 'react';

class Cell extends React.Component {
    render() {
        let left_style = this.props.cell_size * this.props.x + 1;
        let top_style = this.props.cell_size * this.props.y + 1;
        let width_style = this.props.cell_size - 1;
        let height_style = this.props.cell_size - 1;
        return (
            <div className="cell"
            style={{
                left: `${left_style}px`,
                top: `${top_style}px`,
                width: `${width_style}px`,
                height: `${height_style}px`,
            }}
            />
        )
    }
}

export default Cell;