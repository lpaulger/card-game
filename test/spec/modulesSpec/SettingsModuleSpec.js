define(['modules/SettingsModule','modules/StorageModule'], function(Settings, Storage){
  'use strict';
  describe('SettingsModule', function(){
    describe('get a settings value', function(){
      describe('and no settings are currently stored', function(){
        var _settings;
        beforeEach(function(){
          spyOn(Settings, 'load').and.callThrough();
        });

        it('should load settings or the defaults', function(){
          _settings = Settings.get('manual-count');
          expect(Settings.load).toHaveBeenCalled();
        });
      });
    });

    describe('load settings', function(){
      describe('and no settings in localstorage', function(){
        it('should return the defaults', function(){
          var _settings = Settings.load();
          expect(_settings).toEqual(Settings._defaultSettings);
        });
      });
    });

    describe('save settings', function(){
      var _settings;
      beforeEach(function(){
        _settings = Settings.load();
        spyOn(Storage, 'saveSettings');
      });

      it('should call saveSettings', function(){
        Settings.save(_settings);
        expect(Storage.saveSettings).toHaveBeenCalledWith(_settings);
      });
    });
  });
});