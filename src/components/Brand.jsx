import React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const Brand = () => {
    const Brands = ['Purina', 'Sand castle', 'Sheba']
    const chips = () => {
        return (
            Brands.map((brand, index) => {
                return  <Chip key={index} label={brand}/>
            })
        )
    }
    return (
        <>
            <button>Add brand</button>
            <Stack direction='row' spacing={1}>
                {chips()}
            </Stack>
        </>
    )
}

export default Brand