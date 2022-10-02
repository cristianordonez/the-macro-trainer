import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {
   Box,
   Collapse,
   IconButton,
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableRow,
   Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { FoodSearchResult } from '../../../../types/types';

export const FoodListRow = ({
   brand_name,
   brand_owner,
   branded_food_category,
   description,
   fdc_id,
   serving_size,
   serving_size_unit,
   data_type,
   calories,
   calcium,
   cholesterol,
   dietary_fiber,
   iron,
   potassium,
   protein,
   saturated_fat,
   monounsaturated_fat,
   polyunsaturated_fat,
   sodium,
   sugar,
   total_carbohydrates,
   total_fat,
   trans_fat,
   vitamin_a,
   vitamin_c,
   vitamin_d,
}: FoodSearchResult) => {
   const [open, setOpen] = useState<boolean>(false);

   let brand_name_updated = '';
   let description_updated = '';

   if (brand_name !== null) {
      const brandNameArr = brand_name.split(' ');
      for (let i = 0; i < brandNameArr.length; i++) {
         brandNameArr[i] =
            brandNameArr[i][0] + brandNameArr[i].slice(1).toLowerCase();
      }
      brand_name_updated = brandNameArr.join(' ');
   }

   if (description !== null) {
      const descriptionArr = description.split(' ');
      for (let i = 0; i < descriptionArr.length; i++) {
         descriptionArr[i] =
            descriptionArr[i][0] + descriptionArr[i].slice(1).toLowerCase();
      }
      description_updated = descriptionArr.join(' ');
   }

   return (
      <>
         <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
            <TableCell>
               <IconButton
                  aria-label='expand row'
                  size='small'
                  onClick={() => setOpen(!open)}
               >
                  {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
               </IconButton>
            </TableCell>
            <TableCell component='th' scope='row'>
               {description_updated}
            </TableCell>
            <TableCell align='right'>{calories}</TableCell>
            <TableCell align='right'>{total_fat}</TableCell>
            <TableCell align='right'>{total_carbohydrates}</TableCell>
            <TableCell align='right'>{protein}</TableCell>
         </TableRow>
         <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
               <Collapse in={open} timeout='auto' unmountOnExit>
                  <Box sx={{ margin: 1 }}>
                     {data_type === 'branded_food' ? (
                        <>
                           <Typography
                              variant='h6'
                              gutterBottom
                              component='div'
                           >
                              Product Information
                           </Typography>
                           <Table size='small' aria-label='purchases'>
                              <TableHead>
                                 <TableRow>
                                    <TableCell>Food Category</TableCell>
                                    <TableCell>Brand</TableCell>
                                    <TableCell align='right'>
                                       Brand owner
                                    </TableCell>
                                    <TableCell align='right'>
                                       Total Fiber&nbsp;(g)
                                    </TableCell>
                                 </TableRow>
                              </TableHead>
                              <TableBody>
                                 <TableRow>
                                    <TableCell component='th' scope='row'>
                                       {branded_food_category}
                                    </TableCell>
                                    <TableCell>{brand_name_updated}</TableCell>
                                    <TableCell align='right'>
                                       {brand_owner}
                                    </TableCell>
                                    <TableCell align='right'>
                                       {dietary_fiber}
                                    </TableCell>
                                 </TableRow>
                              </TableBody>
                           </Table>
                        </>
                     ) : (
                        <>
                           <Typography
                              variant='h6'
                              gutterBottom
                              component='div'
                           >
                              Additional Nutrition Data
                           </Typography>
                           <Table size='small' aria-label='purchases'>
                              <TableHead>
                                 <TableRow>
                                    <TableCell>Fiber&nbsp;(g)</TableCell>
                                    <TableCell>Sugar&nbsp;(g)</TableCell>
                                    <TableCell>
                                       Saturated Fat&nbsp;(g)
                                    </TableCell>
                                    <TableCell align='right'>
                                       Trans Fat&nbsp;(g)
                                    </TableCell>
                                    <TableCell align='right'>
                                       Sodium&nbsp;(mg)
                                    </TableCell>
                                    <TableCell align='right'>
                                       Potassium&nbsp;(mg)
                                    </TableCell>
                                 </TableRow>
                              </TableHead>
                              <TableBody>
                                 <TableRow>
                                    <TableCell component='th' scope='row'>
                                       {dietary_fiber}
                                    </TableCell>
                                    <TableCell>{sugar}</TableCell>
                                    <TableCell>{saturated_fat}</TableCell>
                                    <TableCell align='right'>
                                       {trans_fat}
                                    </TableCell>
                                    <TableCell align='right'>
                                       {sodium}
                                    </TableCell>
                                    <TableCell align='right'>
                                       {potassium}
                                    </TableCell>
                                 </TableRow>
                              </TableBody>
                           </Table>
                        </>
                     )}
                  </Box>
               </Collapse>
            </TableCell>
         </TableRow>
      </>
   );
};
