import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, price, brand) {
    return {name, price, brand}
}
//Call service endpoint
const rows = [
    createData('Dogchow 2kg', 150, 'Purina'),
    createData('Oddor away 18kg', 600, 'Sand castle'),
    createData('Pork can 18g', 50, 'Sheba')
]

const ProductsTable = () => {
    return (
        <>
            <button>Add product</button>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="Products">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Brand</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow
                                key={row.name}
                                sx={{'&:last-chiild td, &:last-child th': {border: 0}}}
                            >
                                <TableCell component='th' scope='row'>
                                    {row.name}
                                </TableCell>
                                <TableCell>
                                    {row.price}
                                </TableCell>
                                <TableCell>
                                    {row.brand}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default ProductsTable