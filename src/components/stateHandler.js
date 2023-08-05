"use strict";

/**
 * This class manages the state of the "Projekt"-pages
 * It is used to manage if and what projects are displayed
 *  as well as the current main-image of the focussed project
 */
class StateHandler{
    constructor(){
      this.detailedView = false;  // Is a project focussed?
      this.currentView = -1;     // Which project is focussed?
      this.currentImg = 0;    // Which image is displayed in the focussed project?

      this.setClosed = this.setClosed.bind(this);
      this.decCurrentImg = this.decCurrentImg.bind(this);
      this.incCurrentImg = this.incCurrentImg.bind(this);
    }

    /**
     * Set the focussed project to the given project
     * @param {*} viewedTile 
     */
    setView(viewedTile){
      this.detailedView = true;
      this.currentView = viewedTile;
    }

    /**
     * Close the focussed project
     */
    setClosed(){
      this.detailedView = false;
      this.currentView = -1;
      this.currentImg = 0;
    }

    /**
     * Increment the current image of the focussed project
     * If the current image is the last image, the first image is displayed
     * @param {*} maxImgs The number of images of the focussed project
     */
    incCurrentImg(maxImgs){
      this.currentImg = this.currentImg+1;
      if(this.currentImg>maxImgs-1) this.currentImg=0;
    }
    /**
     * Increment the current image of the focussed project
     * If the current image is the first image, the last image is displayed
     * @param {*} maxImgs The number of images of the focussed project
     */
    decCurrentImg(maxImgs){
      this.currentImg = this.currentImg-1;
      if(this.currentImg<0) this.currentImg=maxImgs-1;
    }
    /**
     * Set the current image of the focussed project
     * @param {*} newImg Index of the new image to be displayed
     */
    setCurrentImg(newImg){
      this.currentImg = newImg;
    }

    /**
     * 
     * @returns {boolean} Is a project focussed?
     */
    isDetailedView(){
      return this.detailedView;
    }
    /**
     * @returns {number} Which project is focussed?
     */
    getCurrentView(){
      return this.currentView;
    }
    /**
     * @returns {number} Which image is displayed in the focussed project?
     */
    getCurrentImg(){
      return this.currentImg;
    }
  }


export default StateHandler;