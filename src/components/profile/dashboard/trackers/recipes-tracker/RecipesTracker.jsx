import React, {useEffect, useState} from 'react';
import styles from './RecipesTracker.module.scss'
import plus from "../../../../../assets/redPlus.svg";
import food1 from "../../../../../assets/food1.svg";
import food2 from "../../../../../assets/food2.svg";
import food3 from "../../../../../assets/food3.svg";
import Modal from "../../../../modal/Modal";
import {useDispatch, useSelector} from "react-redux";
import {createShopList, getFavouriteRecipes} from "../../../../../reducers/recipes-reducer";
import RecipeHighlight from "./RecipeHighlight";
import FullRecipe from "./FullRecipe";
import ShopList from "./ShopList";


const RecipesTracker = () => {
    const [modalActive, setModalActive] = useState(false);
    const [recipeView, setRecipeView] = useState(false);
    const [activeRecipe, setActiveRecipe] = useState({});
    const [chosenRecipes, setChosenRecipes] = useState([]);
    const [isChoose, setIsChoose] = useState(false);
    const favouriteRecipes = useSelector((state) => state.recipes.favouriteRecipes);
    const shopList = useSelector((state)=>state.recipes.shopList);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getFavouriteRecipes())
    }, []);
    useEffect(()=>{
        if(chosenRecipes.length===0) setIsChoose(true)
    }, [chosenRecipes])
    const onCreateShopList = (chosenRecipes) =>{
        dispatch(createShopList(chosenRecipes));
    }
    const FavouriteRecipes = favouriteRecipes.map((recipe) => (
        <RecipeHighlight recipe={recipe}
                         setRecipeView={setRecipeView}
                         setActiveRecipe={setActiveRecipe}
                         setChosenRecipes={setChosenRecipes}
                         setIsChoose={setIsChoose}
        />
    ))
    return (
        <div className={styles.wrapper}>
            <div className={styles.images}>
                <img src={food1} alt={'food'}/>
                <img src={food2} alt={'food'}/>
                <img src={food3} alt={'food'}/>
            </div>
            <p>
                Ваши рецепты
            </p>
            <button className={styles.addingButton}>
                <img src={plus} alt={'plus'} onClick={() => setModalActive(true)}/>
            </button>
            <Modal active={modalActive} setActive={setModalActive} backgroundColor={'recipe'}>
                <p className={styles.title}>Любимые рецепты</p>
                {recipeView ? <FullRecipe recipe={activeRecipe} setRecipeView={setRecipeView} setInChoose={setIsChoose}/> :
                    <div className={styles.recipesModal}>
                        <div className={styles.favouriteRecipes}>
                            {FavouriteRecipes}
                        </div>
                        <div className={styles.shopListBlock}>
                            {isChoose?null:<ShopList shopList={shopList}/>}
                            <button onClick={()=> {
                                setIsChoose(false);
                                onCreateShopList(chosenRecipes);
                            }}>Сформировать список</button>
                        </div>
                    </div>
                }
            </Modal>
        </div>
    )
}

export default RecipesTracker;