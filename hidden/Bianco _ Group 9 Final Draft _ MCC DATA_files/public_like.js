/*! v3.23.02 - 2015-11-12 */
cdb.admin.Like=cdb.core.Model.extend({defaults:{likeable:!0},url:function(a){var b=cdb.config.urlVersion("like",a);return"/api/"+b+"/viz/"+this.get("vis_id")+"/like"},initialize:function(){_.bindAll(this,"_onSaveError"),this.on("destroy",function(){this.set({liked:!1,likes:this.get("likes")-1})},this)},_onSaveError:function(a,b){this.trigger("error",{status:b.status,statusText:b.statusText})},toggleLiked:function(){this.get("liked")?this.destroy():(this.set({id:null},{silent:!0}),this.save({},{error:this._onSaveError}))}},{newByVisData:function(a){var b=_.defaults({id:a.liked?a.vis_id:null},_.omit(a,"url")),c=new cdb.admin.Like(b);return a.url&&(c.url=a.url),c}}),cdb.open.LikeView=cdb.core.View.extend({events:{click:"_onClick"},_onClick:function(a){a.preventDefault(),a.stopPropagation(),this.model.toggleLiked();var b=this;this.model.bind("error",function(a){400===a.status?b.model.set({id:b.model.get("vis_id"),liked:!0}):403===a.status&&(window.top.location.href="https://cartodb.com/sessions/new")})},initialize:function(){this.model.bind("change:likes, change:liked",function(){this._updateCounter(),this.model.get("liked")?this._highlightHeart():this._unhighlightHeart()},this),this.options.auto_fetch&&this.model.fetch()},_updateCounter:function(){var a=$(".js-like .counter"),b=this.model.get("likes");b>2||this.model.get("show_count")?a.text(b):a.text("")},_unhighlightHeart:function(){var a=$(".js-like"),b=$(".js-like .icon");b.addClass("is-pulsating is-animated"),b.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){$(this).removeClass("is-pulsating is-animated"),a.removeClass("is-highlighted")})},_highlightHeart:function(){var a=$(".js-like"),b=$(".js-like .icon");a.addClass("is-highlighted"),b.addClass("is-pulsating is-animated"),b.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){$(this).removeClass("is-pulsating is-animated")})}}),cdb.open.Like=cdb.admin.Like.extend({});
//# sourceMappingURL=public_like.js.map