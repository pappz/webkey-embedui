function WKEmbedUI(options) {
  var self=this;
  this.container = options.container;
  this.raToken = options.raToken;
  this.refType = "";
  this.devid = "";

  var setDeviceReferenceType = function(options) {
    if ('publicid' in options === true) {
      self.refType = 'publicid';
      self.devid= options.publicid;
    } else if ('serial' in options === true) {
      self.refType = 'serial';
      self.devid= options.serial;
    } else if ('devicenick' in options === true) {
      self.refType = 'devicenick';
      self.devid= options.devicenick;
    }
  };

  var prepareFrame = function() {
    var ifrm = document.createElement("iframe");
    params=self.refType+"="+self.devid;
    params+="&ratoken="+self.raToken;
    params+="&wmode=embed";
    ifrm.setAttribute("src", "https://webkeyapp.com/mgm?"+params);
    ifrm.style.width = "100%";
    ifrm.style.height = "100%";
    ifrm.style.minWidth = "400px"
    ifrm.style.minHeight = "600px";
    document.getElementById(self.container).appendChild(ifrm);
  };

  setDeviceReferenceType(options);
  prepareFrame();
}
