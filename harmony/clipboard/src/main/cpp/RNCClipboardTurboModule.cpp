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

#include "RNCClipboardTurboModule.h"

using namespace rnoh;
using namespace facebook;

static jsi::Value __hostFunction_RNCClipboardTurboModule_getConstants(
    jsi::Runtime &rt,
    react::TurboModule & turboModule,
    const jsi::Value* args,
    size_t count) {
    return jsi::Value(static_cast<ArkTSTurboModule &> (turboModule).call(rt,"getConstants", args, count));
    }

static jsi::Value __hostFunction_RNCClipboardTurboModule_getString(
    jsi::Runtime &rt,
    react::TurboModule & turboModule,
    const jsi::Value* args,
    size_t count) {
    return jsi::Value( static_cast<ArkTSTurboModule &> (turboModule).callAsync(rt,"getString", args, count));
    }

static jsi::Value __hostFunction_RNCClipboardTurboModule_getStrings(
    jsi::Runtime &rt,
    react::TurboModule & turboModule,
    const jsi::Value* args,
    size_t count) {
    return jsi::Value( static_cast<ArkTSTurboModule &> (turboModule).callAsync(rt,"getStrings", args, count));
    }

static jsi::Value __hostFunction_RNCClipboardTurboModule_setString(
    jsi::Runtime &rt,
    react::TurboModule & turboModule,
    const jsi::Value* args,
    size_t count) {
    return jsi::Value( static_cast<ArkTSTurboModule &> (turboModule).call(rt,"setString", args, count));
    }

static jsi::Value __hostFunction_RNCClipboardTurboModule_hasString(
    jsi::Runtime &rt,
    react::TurboModule & turboModule,
    const jsi::Value* args,
    size_t count) {
    return jsi::Value( static_cast<ArkTSTurboModule &> (turboModule).callAsync(rt,"hasString", args, count));
    }

static jsi::Value __hostFunction_RNCClipboardTurboModule_hasNumber(
    jsi::Runtime &rt,
    react::TurboModule & turboModule,
    const jsi::Value* args,
    size_t count) {
    return jsi::Value( static_cast<ArkTSTurboModule &> (turboModule).callAsync(rt,"hasNumber", args, count));
    }

static jsi::Value __hostFunction_RNCClipboardTurboModule_getImagePNG(
    jsi::Runtime &rt,
    react::TurboModule & turboModule,
    const jsi::Value* args,
    size_t count) {
    return jsi::Value( static_cast<ArkTSTurboModule &> (turboModule).callAsync(rt,"getImagePNG", args, count));
    }

static jsi::Value __hostFunction_RNCClipboardTurboModule_getImageJPG(
    jsi::Runtime &rt,
    react::TurboModule & turboModule,
    const jsi::Value* args,
    size_t count) {
    return jsi::Value( static_cast<ArkTSTurboModule &> (turboModule).callAsync(rt,"getImageJPG", args, count));
    }

static jsi::Value __hostFunction_RNCClipboardTurboModule_setImage(
    jsi::Runtime &rt,
    react::TurboModule & turboModule,
    const jsi::Value* args,
    size_t count) {
		// add log
        LOG(INFO) << "RNOH clipboard:setImage";
    return jsi::Value( static_cast<ArkTSTurboModule &> (turboModule).call(rt,"setImage", args, count));
    }

static jsi::Value __hostFunction_RNCClipboardTurboModule_getImage(
    jsi::Runtime &rt,
    react::TurboModule & turboModule,
    const jsi::Value* args,
    size_t count) {
    return jsi::Value( static_cast<ArkTSTurboModule &> (turboModule).callAsync(rt,"getImage", args, count));
    }

static jsi::Value __hostFunction_RNCClipboardTurboModule_setStrings(
    jsi::Runtime &rt,
    react::TurboModule & turboModule,
    const jsi::Value* args,
    size_t count) {
    return jsi::Value( static_cast<ArkTSTurboModule &> (turboModule).call(rt,"setStrings", args, count));
    }

static jsi::Value __hostFunction_RNCClipboardTurboModule_hasImage(
    jsi::Runtime &rt,
    react::TurboModule & turboModule,
    const jsi::Value* args,
    size_t count) {
    return jsi::Value( static_cast<ArkTSTurboModule &> (turboModule).callAsync(rt,"hasImage", args, count));
    }

static jsi::Value __hostFunction_RNCClipboardTurboModule_hasURL(
    jsi::Runtime &rt,
    react::TurboModule & turboModule,
    const jsi::Value* args,
    size_t count) {
    // add log
    return jsi::Value( static_cast<ArkTSTurboModule &> (turboModule).callAsync(rt,"hasURL", args, count));
    }

static jsi::Value __hostFunction_RNCClipboardTurboModule_hasWebURL(
    jsi::Runtime &rt,
    react::TurboModule & turboModule,
    const jsi::Value* args,
    size_t count) {
    return jsi::Value( static_cast<ArkTSTurboModule &> (turboModule).callAsync(rt,"hasWebURL", args, count));
    }

RNCClipboardTurboModule::RNCClipboardTurboModule(const ArkTSTurboModule::Context ctx, const std::string name)
    : ArkTSTurboModule(ctx,name)
{
    methodMap_["getConstants"]= MethodMetadata{0, __hostFunction_RNCClipboardTurboModule_getConstants};
    methodMap_["getString"]= MethodMetadata{0, __hostFunction_RNCClipboardTurboModule_getString};
    methodMap_["getStrings"]= MethodMetadata{0, __hostFunction_RNCClipboardTurboModule_getStrings};
    
    methodMap_["setString"]= MethodMetadata{1, __hostFunction_RNCClipboardTurboModule_setString};
    methodMap_["hasString"]= MethodMetadata{0, __hostFunction_RNCClipboardTurboModule_hasString};
    
    methodMap_["hasNumber"]= MethodMetadata{0, __hostFunction_RNCClipboardTurboModule_hasNumber};
    methodMap_["getImagePNG"]= MethodMetadata{0, __hostFunction_RNCClipboardTurboModule_getImagePNG};
    methodMap_["getImageJPG"]= MethodMetadata{0, __hostFunction_RNCClipboardTurboModule_getImageJPG};
    
    methodMap_["setImage"]= MethodMetadata{1, __hostFunction_RNCClipboardTurboModule_setImage};
    methodMap_["getImage"]= MethodMetadata{0, __hostFunction_RNCClipboardTurboModule_getImage};
    
    methodMap_["setStrings"]= MethodMetadata{1, __hostFunction_RNCClipboardTurboModule_setStrings};
    methodMap_["hasImage"]= MethodMetadata{0, __hostFunction_RNCClipboardTurboModule_hasImage};
    methodMap_["hasURL"]= MethodMetadata{0, __hostFunction_RNCClipboardTurboModule_hasURL};
    methodMap_["hasWebURL"]= MethodMetadata{0, __hostFunction_RNCClipboardTurboModule_hasWebURL};
}