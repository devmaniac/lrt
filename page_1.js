//set main namespace
goog.provide('lrt.page_1');

//goog.require('lime.Scene');
//goog.require('lime.Circle');
//goog.require('lime.Layer');
//goog.require('lime.Label');


lrt.page_1 = function() {
	goog.base(this);
	this.scene = new lime.Scene();
	
	//page background
	this.background = new lime.Layer().setPosition(0,0);
	this.bgImage = new lime.Sprite().setSize(1024,768).setAnchorPoint(0,0).setFill('assets/bg_1.jpg');
	this.background.appendChild(this.bgImage);
	
	this.target = new lime.Layer().setPosition(512,384);
    this.actor = new lime.Circle().setSize(150,150).setFill(155,250,175);
    this.lbl = new lime.Label().setSize(160,50).setFontSize(30).setText('Pag. 1');
    this.title = new lime.Label().setSize(800,70).setFontSize(60).setText('Now move me around!').setOpacity(0).setPosition(512,80).setFontColor('#999').setFill(200,100,0,.1);

	
    	//add circle and label to target object
    	this.target.appendChild(this.actor);
    	this.target.appendChild(this.lbl);

    //add layers to the scene
    this.scene.appendChild(this.background);
    this.scene.appendChild(this.target);
    this.scene.appendChild(this.title);
	}

goog.inherits(lrt.page_1, lime.Scene, lime.Circle, lime.Layer, lime.Label, lime.animation.Spawn, lime.animation.FadeTo, lime.animation.ScaleTo);

lrt.page_1.prototype.animate = function() {
	
	this.target.runAction(new lime.animation.Spawn(new lime.animation.FadeTo(.5).setDuration(.2), new lime.animation.ScaleTo(0.5).setDuration(.8)));
        this.title.runAction(new lime.animation.FadeTo(1));

	}
