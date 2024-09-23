import React from "react"
import './product.css'

export default class Products extends React.Component
{
    data = [
        ['React', 500],
        ['React Native',650],
        ['Node.js',450],
        ['MongoDB',300],
        ['Express.js',650]
    ]
    render(){
        return (

            <table border="1">
                <tr><th>name</th><th>price</th></tr>
                {
                    this.data.map(d => {
                        return <tr><td>{d[0]}</td><td></td></tr>
                    })
                }
            </table>

        )
    }

    }

function Products() {
    return <div></div>
}