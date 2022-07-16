//! this is search page sidebar
import React, { ReactNode } from 'react';
import { SideBar } from '../shared/sidebar/SideBar';

export type CurrentGoals = {
   user_id: number;
   total_carbohydrates: number;
   min_carbs_per_meal: number;
   max_carbs_per_meal: number;
   total_protein: number;
   min_protein_per_meal: number;
   max_protein_per_meal: number;
   total_fat: number;
   min_fat_per_meal: number;
   max_fat_per_meal: number;
   total_calories: number;
   min_calories_per_meal: number;
   max_calories_per_meal: number;
};

interface SearchPageSidebarProps {
   mobileOpen: boolean | undefined;
   handleDrawerToggle: any;
   SearchFormComponent: ReactNode;
   apiData: never[];
   goals: CurrentGoals;
}

export const SideBarSearchPage = ({
   mobileOpen,
   handleDrawerToggle,
   SearchFormComponent,
   apiData,
   goals,
}: SearchPageSidebarProps) => {
   const drawerWidth = 350;
   return (
      <>
         <SideBar
            mobileOpen={mobileOpen}
            handleDrawerToggle={handleDrawerToggle}
            SearchFormComponent={SearchFormComponent}
            apiData={apiData}
            goals={goals}
            page={'search'}
         />
      </>
   );
};