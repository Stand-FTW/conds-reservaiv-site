"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7277],{27277:(G,y,i)=>{i.r(y),i.d(y,{AdministracaoTiPageModule:()=>I});var v=i(97582),e=i(98274),r=i(36895),C=i(24006),B=i(92216),k=i(48058),S=i(35593),c=i(37340),g=i(10805);function D(a,t){if(1&a&&(e.TgZ(0,"span",9),e._uU(1),e.qZA()),2&a){const n=e.oxw();e.xp6(1),e.hij(" ",n.header," ")}}function O(a,t){1&a&&e.GkF(0)}function F(a,t){1&a&&e.Hsn(0,1,["*ngIf","hasHeaderFacet"])}function w(a,t){1&a&&e.GkF(0)}function M(a,t){if(1&a&&(e.ynx(0),e.YNc(1,w,1,0,"ng-container",5),e.BQk()),2&a){const n=e.oxw();e.xp6(1),e.Q6J("ngTemplateOutlet",n.contentTemplate)}}const P=["*",[["p-header"]]],L=function(a){return{"p-accordion-tab-active":a}},H=function(a,t){return{"p-highlight":a,"p-disabled":t}},A=function(a){return{transitionParams:a}},z=function(a){return{value:"visible",params:a}},R=function(a){return{value:"hidden",params:a}};let J=0;class l{constructor(t,n){this.changeDetector=n,this.cache=!0,this.selectedChange=new e.vpe,this.transitionOptions="400ms cubic-bezier(0.86, 0, 0.07, 1)",this.id="p-accordiontab-"+J++,this.accordion=t}get selected(){return this._selected}set selected(t){this._selected=t,this.loaded||(this._selected&&this.cache&&(this.loaded=!0),this.changeDetector.detectChanges())}ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"content":default:this.contentTemplate=t.template;break;case"header":this.headerTemplate=t.template}})}toggle(t){if(this.disabled)return!1;let n=this.findTabIndex();if(this.selected)this.selected=!1,this.accordion.onClose.emit({originalEvent:t,index:n});else{if(!this.accordion.multiple)for(var o=0;o<this.accordion.tabs.length;o++)this.accordion.tabs[o].selected&&(this.accordion.tabs[o].selected=!1,this.accordion.tabs[o].selectedChange.emit(!1),this.accordion.tabs[o].changeDetector.markForCheck());this.selected=!0,this.loaded=!0,this.accordion.onOpen.emit({originalEvent:t,index:n})}this.selectedChange.emit(this.selected),this.accordion.updateActiveIndex(),this.changeDetector.markForCheck(),t.preventDefault()}findTabIndex(){let t=-1;for(var n=0;n<this.accordion.tabs.length;n++)if(this.accordion.tabs[n]==this){t=n;break}return t}get hasHeaderFacet(){return this.headerFacet&&this.headerFacet.length>0}onKeydown(t){(32===t.which||13===t.which)&&(this.toggle(t),t.preventDefault())}ngOnDestroy(){this.accordion.tabs.splice(this.findTabIndex(),1)}}l.\u0275fac=function(t){return new(t||l)(e.Y36((0,e.Gpc)(()=>d)),e.Y36(e.sBO))},l.\u0275cmp=e.Xpm({type:l,selectors:[["p-accordionTab"]],contentQueries:function(t,n,o){if(1&t&&(e.Suo(o,g.h4,4),e.Suo(o,g.jx,4)),2&t){let s;e.iGM(s=e.CRH())&&(n.headerFacet=s),e.iGM(s=e.CRH())&&(n.templates=s)}},hostAttrs:[1,"p-element"],inputs:{header:"header",disabled:"disabled",cache:"cache",transitionOptions:"transitionOptions",selected:"selected"},outputs:{selectedChange:"selectedChange"},ngContentSelectors:["*","p-header"],decls:11,vars:28,consts:[[1,"p-accordion-tab",3,"ngClass"],[1,"p-accordion-header",3,"ngClass"],["role","tab",1,"p-accordion-header-link",3,"click","keydown"],[1,"p-accordion-toggle-icon",3,"ngClass"],["class","p-accordion-header-text",4,"ngIf"],[4,"ngTemplateOutlet"],[4,"ngIf"],["role","region",1,"p-toggleable-content"],[1,"p-accordion-content"],[1,"p-accordion-header-text"]],template:function(t,n){1&t&&(e.F$t(P),e.TgZ(0,"div",0)(1,"div",1)(2,"a",2),e.NdJ("click",function(s){return n.toggle(s)})("keydown",function(s){return n.onKeydown(s)}),e._UZ(3,"span",3),e.YNc(4,D,2,1,"span",4),e.YNc(5,O,1,0,"ng-container",5),e.YNc(6,F,1,0,"ng-content",6),e.qZA()(),e.TgZ(7,"div",7)(8,"div",8),e.Hsn(9),e.YNc(10,M,2,1,"ng-container",6),e.qZA()()()),2&t&&(e.Q6J("ngClass",e.VKq(15,L,n.selected)),e.xp6(1),e.Q6J("ngClass",e.WLB(17,H,n.selected,n.disabled)),e.xp6(1),e.uIk("tabindex",n.disabled?null:0)("id",n.id)("aria-controls",n.id+"-content")("aria-expanded",n.selected),e.xp6(1),e.Q6J("ngClass",n.selected?n.accordion.collapseIcon:n.accordion.expandIcon),e.xp6(1),e.Q6J("ngIf",!n.hasHeaderFacet),e.xp6(1),e.Q6J("ngTemplateOutlet",n.headerTemplate),e.xp6(1),e.Q6J("ngIf",n.hasHeaderFacet),e.xp6(1),e.Q6J("@tabContent",n.selected?e.VKq(22,z,e.VKq(20,A,n.transitionOptions)):e.VKq(26,R,e.VKq(24,A,n.transitionOptions))),e.uIk("id",n.id+"-content")("aria-hidden",!n.selected)("aria-labelledby",n.id),e.xp6(3),e.Q6J("ngIf",n.contentTemplate&&(n.cache?n.loaded:n.selected)))},dependencies:[r.mk,r.O5,r.tP],styles:[".p-accordion-header-link{cursor:pointer;display:flex;align-items:center;-webkit-user-select:none;user-select:none;position:relative;text-decoration:none}.p-accordion-header-link:focus{z-index:1}.p-accordion-header-text{line-height:1}.p-accordion .p-toggleable-content{overflow:hidden}.p-accordion .p-accordion-tab-active>.p-toggleable-content:not(.ng-animating){overflow:inherit}\n"],encapsulation:2,data:{animation:[(0,c.X$)("tabContent",[(0,c.SB)("hidden",(0,c.oB)({height:"0"})),(0,c.SB)("visible",(0,c.oB)({height:"*"})),(0,c.eR)("visible <=> hidden",[(0,c.jt)("{{transitionParams}}")]),(0,c.eR)("void => *",(0,c.jt)(0))])]},changeDetection:0});class d{constructor(t,n){this.el=t,this.changeDetector=n,this.onClose=new e.vpe,this.onOpen=new e.vpe,this.expandIcon="pi pi-fw pi-chevron-right",this.collapseIcon="pi pi-fw pi-chevron-down",this.activeIndexChange=new e.vpe,this.tabs=[]}ngAfterContentInit(){this.initTabs(),this.tabListSubscription=this.tabList.changes.subscribe(t=>{this.initTabs()})}initTabs(){this.tabs=this.tabList.toArray(),this.updateSelectionState(),this.changeDetector.markForCheck()}getBlockableElement(){return this.el.nativeElement.children[0]}get activeIndex(){return this._activeIndex}set activeIndex(t){this._activeIndex=t,this.preventActiveIndexPropagation?this.preventActiveIndexPropagation=!1:this.updateSelectionState()}updateSelectionState(){if(this.tabs&&this.tabs.length&&null!=this._activeIndex)for(let t=0;t<this.tabs.length;t++){let n=this.multiple?this._activeIndex.includes(t):t===this._activeIndex;n!==this.tabs[t].selected&&(this.tabs[t].selected=n,this.tabs[t].selectedChange.emit(n),this.tabs[t].changeDetector.markForCheck())}}updateActiveIndex(){let t=this.multiple?[]:null;this.tabs.forEach((n,o)=>{if(n.selected){if(!this.multiple)return void(t=o);t.push(o)}}),this.preventActiveIndexPropagation=!0,this.activeIndexChange.emit(t)}ngOnDestroy(){this.tabListSubscription&&this.tabListSubscription.unsubscribe()}}d.\u0275fac=function(t){return new(t||d)(e.Y36(e.SBq),e.Y36(e.sBO))},d.\u0275cmp=e.Xpm({type:d,selectors:[["p-accordion"]],contentQueries:function(t,n,o){if(1&t&&e.Suo(o,l,4),2&t){let s;e.iGM(s=e.CRH())&&(n.tabList=s)}},hostAttrs:[1,"p-element"],inputs:{multiple:"multiple",style:"style",styleClass:"styleClass",expandIcon:"expandIcon",collapseIcon:"collapseIcon",activeIndex:"activeIndex"},outputs:{onClose:"onClose",onOpen:"onOpen",activeIndexChange:"activeIndexChange"},ngContentSelectors:["*"],decls:2,vars:4,consts:[["role","tablist",3,"ngClass","ngStyle"]],template:function(t,n){1&t&&(e.F$t(),e.TgZ(0,"div",0),e.Hsn(1),e.qZA()),2&t&&(e.Tol(n.styleClass),e.Q6J("ngClass","p-accordion p-component")("ngStyle",n.style))},dependencies:[r.mk,r.PC],encapsulation:2,changeDetection:0});class p{}p.\u0275fac=function(t){return new(t||p)},p.\u0275mod=e.oAB({type:p,declarations:[d,l],imports:[r.ez],exports:[d,l,g.m8]}),p.\u0275inj=e.cJS({imports:[r.ez,g.m8]});var U=i(91795),j=i(75700),T=i(39528);var V=i(89535),Y=i(59256),b=i(54222),f=i(99038),u=i(34057),m=i(98739);let h=class{constructor(t,n){this.storage=t,this.toastService=n}ngOnInit(){}openSwagger(){const t=`${f.Hz.baseURL}/api`;b.U.externalLinkHandle(t)}openBullDashboard(){const{refresh_token:t,perfil_nome:n}=this.storage.getLocalUser();if(n!=u.u.ADMIN_TI)return void this.toastService.presentToast({detalhe:`Apenas '${u.u.ADMIN_TI}' podem acessar esta funcionalidade`,titulo:"N\xe3o autorizado",duracao:m.m4.shortDuration,gravidade:m.kl.ATENCAO});const o=`${f.Hz.baseURL}/queues/?authorization=${t}`;b.U.externalLinkHandle(o)}openStatus(){const{perfil_nome:t}=this.storage.getLocalUser();if(t!=u.u.ADMIN_TI)return void this.toastService.presentToast({detalhe:`Apenas '${u.u.ADMIN_TI}' podem acessar esta funcionalidade`,titulo:"N\xe3o autorizado",duracao:m.m4.shortDuration,gravidade:m.kl.ATENCAO});const n=`${f.Hz.baseURL}/api/status`;b.U.externalLinkHandle(n)}};h.ctorParameters=()=>[{type:V.V},{type:Y.D}],h=(0,v.gn)([(0,e.wA2)({selector:"app-administracao-ti",template:'<ion-header [translucent]="true">\n  <ion-toolbar>\n    <ion-buttons slot="start">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>ADM. T.I</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content appScrollTheme>\n  <div class="px-4 py-8 md:px-6 lg:px-8 h-full wall-background"\n    >\n    <div class="text-primary font-medium mb-3">Ferramentas</div>\n    <div class="text-900 text-2xl font-bold mb-3">Ferramentas complementar do sistema</div>\n    <div class="grid mt-7">\n\n      <div class="col-12 md:col-4">\n        <div class="shadow-1 p-5 surface-card text-center">\n          <div\n            class="border-circle surface-900 p-4 text-primary inline-flex justify-content-center align-items-center mb-4">\n            <fa-icon class="text-7xl" [icon]="[\'fas\', \'bullseye\']"></fa-icon>\n          </div>\n          <div class="text-900 font-medium text-xl mb-4">Swagger</div>\n          <div class="text-700 text-sm mb-4 line-height-3">Documenta\xe7\xe3o da API dispon\xedvel via Swagger.</div>\n          <button pButton pRipple label="Acessar" class="p-button-text font-bold" (click)="openSwagger()"></button>\n        </div>\n      </div>\n      \n      <div class="col-12 md:col-4">\n        <div class="shadow-1 p-5 surface-card text-center">\n          <div\n            class="border-circle surface-900 p-4 text-primary inline-flex justify-content-center align-items-center mb-4">\n            <fa-icon class="text-7xl" [icon]="[\'fab\', \'watchman-monitoring\']"></fa-icon>\n          </div>\n          <div class="text-900 font-medium text-xl mb-4">Status</div>\n          <div class="text-700 text-sm mb-4 line-height-3">Monitoramento da API.</div>\n          <button pButton pRipple label="Acessar" class="p-button-text font-bold" (click)="openStatus()"></button>\n        </div>\n      </div>\n      \n      <div class="col-12 md:col-4">\n        <div class="shadow-1 p-5 surface-card text-center">\n          <div\n            class="border-circle surface-900 p-4 text-primary inline-flex justify-content-center align-items-center mb-4">\n            <fa-icon class="text-7xl" [icon]="[\'far\', \'file-code\']"></fa-icon>\n          </div>\n          <div class="text-900 font-medium text-xl mb-4">Bull Dashboard</div>\n          <div class="text-700 text-sm mb-4 line-height-3">Dashboard dos JOBs executados em background</div>\n          <button pButton pRipple label="Acessar" class="p-button-text font-bold" (click)="openBullDashboard()"></button>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</ion-content>',styles:[""]})],h);const Z=[{path:"",component:h}];let x=class{};x=(0,v.gn)([(0,e.LVF)({imports:[T.Bz.forChild(Z)],exports:[T.Bz]})],x);var K=i(85226);let I=class{};I=(0,v.gn)([(0,e.LVF)({imports:[r.ez,C.u5,k.Pc,S.hJ,p,U.T,j.b,B.uH,K.o,x],declarations:[h]})],I)}}]);