/**
 * MIT License
 *
 * Copyright (C) 2023 Huawei Device Co., Ltd.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANT KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { TurboModule, TurboModuleContext } from 'rnoh/ts';
import pasteboard from '@ohos.pasteboard';
import util from '@ohos.util';
import image from '@ohos.multimedia.image';
import logger from './Logger';

const TAG = "RNCClipboardTurboModule"

export class RNCClipboardTurboModule extends TurboModule {
  constructor(protected ctx: TurboModuleContext) {
    super(ctx);
    logger.debug(TAG,"RNCClipboardTurboModule constructor");
  }

  getConstants() {
    logger.debug(TAG,"RNCClipboardTurboModule call getConstants");
    return {};
  }

  getString(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      logger.debug(TAG,"RNCClipboardTurboModule call getString");
      let systemPasteboard = pasteboard.getSystemPasteboard();
      systemPasteboard.getData().then((pasteData) => {
        let text = pasteData.getPrimaryText();
        logger.debug(TAG,`getString,text out:${text}`);
        resolve(text);
      }).catch((err) => {
        logger.error(TAG,`getString,Failed to get PasteData. Cause:${err.message}`);
        reject(err);
      })
    });
  }

  getStrings(): Promise<string[]> {
    return new Promise<string[]>((resolve, reject) => {
      logger.debug(TAG,"call getStrings fun");
      let systemPasteboard = pasteboard.getSystemPasteboard();
      systemPasteboard.getData().then((pasteData) => {
        let count = pasteData.getRecordCount();
        let resultSet = []
        logger.debug(TAG,`getStrings fun,getRecordCount :${count}`);
        for (let index = 0; index < count; index++) {
          let record = pasteData.getRecord(index)
          if (record.mimeType == pasteboard.MIMETYPE_TEXT_PLAIN) {
            resultSet.push(record.plainText)
          }
        }
        resolve(resultSet)
      }).catch((err) => {
        logger.error(TAG,`getString fun,Failed to get PasteData. Cause:${err.message}`);
        reject(err)
      })
    });
  }

  setString(content: string) {
    logger.debug(TAG,"setString fun");
    let systemPasteboard = pasteboard.getSystemPasteboard();
    let dataText = content;
    let pasteData = pasteboard.createData(pasteboard.MIMETYPE_TEXT_PLAIN, dataText);
    systemPasteboard.setData(pasteData).then((data) => {
      logger.debug(TAG,"setString fun,Succeeded PasteData");
    }).catch((err) => {
      logger.error(TAG,`setString fun,Failed to set PasteData.setString, Cause:${err.message}`);
    });
    return;
  }

  hasString(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      logger.debug(TAG,"RNCClipboardTurboModule call hasString fun");
      let systemPasteboard = pasteboard.getSystemPasteboard();
      systemPasteboard.getData().then((pasteData) => {
        let count = pasteData.getRecordCount();
        resolve(count > 0)
      }).catch((err) => {
        logger.error(TAG,`RNCClipboardTurboModule hasString,Failed to get PasteData. Cause:${err.message}`);
        reject(err)
      })
    });
  }

  hasNumber(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      logger.debug(TAG,"[RNOH]:RNCClipboardTurboModule call hasNumber");
      let systemPasteboard = pasteboard.getSystemPasteboard();
      let reg = /^[\d]*$/;
      systemPasteboard.getData().then((pasteData) => {
        let count = pasteData.getRecordCount();
        let result = false
        for (let index = 0; index < count; index++) {
          let record = pasteData.getRecord(index);
          if (record.mimeType == pasteboard.MIMETYPE_TEXT_PLAIN && reg.test(record.plainText)) {
            result = true
            logger.debug(TAG,`[RNOH]:RNCClipboardTurboModule hasNumber,result out:${result}`);
            break
          }
        }
        resolve(result)
      }).catch((err) => {
        logger.error(TAG,`[RNOH]: hasNumber,Failed to get PasteData. Cause:${err.message}`);
        reject(err)
      })
    });
  }

  // ios
  getImagePNG(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      logger.debug(TAG,"[RNOH]:RNCClipboardTurboModule call getImagePNG");
      resolve("demo")
    });
  }

  // ios
  getImageJPG(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      logger.debug(TAG,"[RNOH]:RNCClipboardTurboModule call getImageJPG");
      resolve("demo")
    });
  }

  setImage(content: string) {
    logger.debug(TAG,`[RNOH]:RNCClipboardTurboModule call setImage:${content}`);
  }

  getImage(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      logger.debug(TAG,"[RNOH]:RNCClipboardTurboModule call getImage");
      resolve("demo-todo")
    });
  }

  setStrings(content: string[]) {
    logger.debug(TAG,"[RNOH]:RNCClipboardTurboModule call setStrings fun");
    let systemPasteboard = pasteboard.getSystemPasteboard();
    systemPasteboard.getData().then((pasteData) => {
      for (let i = 0; i < content.length; i++) {
        pasteData.addRecord(pasteboard.MIMETYPE_TEXT_PLAIN, content[i]);
        logger.debug(TAG,`[RNOH]:setStrings,PasteData--addRecord:${content[i]}`);
      }

      // setData
      systemPasteboard.setData(pasteData).then((data: void) => {
        logger.debug(TAG,"setStrings,Succeeded in setting PasteData.");
      }).catch((err) => {
        logger.error(TAG,`setStrings,Failed to set PasteData. Cause:${err.message}`);
      });
    }).catch((err) => {
      logger.error(TAG,`setStrings,getData error,Cause:${err.message}`);
    })
    return;
  }

  hasImage(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      logger.debug(TAG,"RNCClipboardTurboModule call hasImage");
      let systemPasteboard = pasteboard.getSystemPasteboard();
      systemPasteboard.getData().then((pasteData) => {
        let count = pasteData.getRecordCount();
        let result = false
        for (let index = 0; index < count; index++) {
          let record = pasteData.getRecord(index);
          if (record.mimeType == pasteboard.MIMETYPE_PIXELMAP) {
            result = true
            break
          }
        }
        resolve(result)
      }).catch((err) => {
        logger.error(TAG,`hasImage,Failed to get PasteData. Cause:${err.message}`);
        reject(err)
      })
    });
  }

  hasURL(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      logger.debug(TAG,"RNCClipboardTurboModule call hasURL");
      let systemPasteboard = pasteboard.getSystemPasteboard();
      systemPasteboard.getData().then((pasteData) => {
        let count = pasteData.getRecordCount();
        let result = false
        for (let index = 0; index < count; index++) {
          let record = pasteData.getRecord(index);
          if (record.mimeType == pasteboard.MIMETYPE_TEXT_URI) {
            logger.debug(TAG,"hasURL,mimeType=MIMETYPE_TEXT_URI");
            result = true
            break
          }
        }
        resolve(result)
      }).catch((err) => {
        logger.error(TAG,`[RNOH]: hasURL,Failed to get PasteData. Cause:${err.message}`);
        reject(err)
      })
    });
  }

  hasWebURL(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      logger.debug(TAG,"RNCClipboardTurboModule call hasWebURL");
      let systemPasteboard = pasteboard.getSystemPasteboard();
      systemPasteboard.getData().then((pasteData) => {
        let count = pasteData.getRecordCount();
        let result = false
        let reg = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/;

        for (let index = 0; index < count; index++) {
          let record = pasteData.getRecord(index);
          if (record.mimeType == pasteboard.MIMETYPE_TEXT_URI) {
            if (reg.test(record.uri)) {
              logger.debug(TAG,"hasWebURL,find webURL in MIMETYPE_TEXT_URI");
              result = true
              break
            }
          } else if (record.mimeType == pasteboard.MIMETYPE_TEXT_PLAIN) {
            if (reg.test(record.plainText)) {
              logger.debug(TAG,"hasWebURL,find webURL in MIMETYPE_TEXT_PLAIN");
              result = true
              break
            }
          }

        }
        resolve(result)
      }).catch((err) => {
        logger.error(TAG,`hasWebURL,Failed to get PasteData. Cause:${err.message}`);
        reject(err)
      });
    });
  }
}