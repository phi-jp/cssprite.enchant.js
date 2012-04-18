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
        initialize: function(width, height, className) {
            enchant.Sprite.call(this, width || 10, height || 10);
            
            if (className) this.className = className;
        }
    });
    
    Object.defineProperty(enchant.CSSprite.prototype, "classList", {
        get: function() {
            return this._element.classList;
        }
    });
    
    
})();
