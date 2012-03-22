/**
 * phi
 */

(function() {
    
    /**
     * @scope enchant.CSSprite.prototype
     */
    enchant.CSSprite = enchant.Class.create(enchant.Sprite, {
        /**
         * CSS + Sprite
         * @constructs
         * @extends enchant.Sprite
         */
        initialize: function(className, width, height) {
            enchant.Sprite.call(this, width || 10, height || 10);
            
            this.className = className;
        }
    });
    
    Object.defineProperty(enchant.CSSprite.prototype, "classList", {
        get: function() {
            return this._element.classList;
        }
    });
    
    
})();
