---
title: Immersion VR
slug: creating-an-interactive-vr-environment
category: vr
featuredImage: /uploads/immersion-thumbnaill.jpg
importance: 1
description: Over the last few years, I've created more than 400 PBR textures and released them to the public domain. The textures are made out of four to six different types of texture maps.
---
import VideoBlock from '~/components/VideoBlock.vue'
import ImageBlock from '~/components/ImageBlock.vue'

Immersion VR is an interactive building inside which the user can move around, change materials and use a lift, designed for the Oculus Rift. An important aspect of the project was to design a remarkable, intuitive user experience.

## Demo

::: ytcontainer 
`youtube:https://www.youtube.com/watch?v=k-Kr6gCmdKU`
:::

## Creating a pleasant experience

Yadda Yadda Theory When designing the controls, I did some research on creating an intuitive user experience and good design guidelines. Below are listed the guidelines that have seemed most helpful to me for this project. Einigi vo dene nün Pünkt wonich glernt han

While the theory is very helpful in the beginning phase of designing the controls, getting an opinion from other people is very important as well. For this project, I originally wanted to do a lot of tests with different people but ended up only doing tests with a few. Nevertheless, their feedback and reactions were extraordinarily useful to me. Here's what came out yadda yadda

<VideoBlock video="hands" :onLeftSide="true" title="Hands and Controllers" desc="To make the user feel more immersed, I opted to display his or her hands and a simplified version of the Oculus Touch controllers in the application. The simplified version of the controllers is made out of only the top of the controllers, which hides some buttons that aren't used in the application and allows to better see the hands." />

<ImageBlock image="immersion_lines.jpg" :onLeftSide="false" title="Choosing a surface" desc="In order to change an object's material, the user simply has to point at it with the index finger of his or her dominant hand, which then either shows a red or green line. If the line is green, the user can change the material by clicking the A or respectively the X button. If he or she presses the A or X button when the line is red, an error sound is played and the controller slightly vibrates." />

<VideoBlock video="matchange" :onLeftSide="true" title="Clicking on materials" desc="After choosing a surface, a selection of materials appear. The currently active material is highlighted, and the user can choose a new one by pressing it with the index finger. The material selection can be closed by moving the hand to the green checkmark sphere." />

<VideoBlock video="teleport" :onLeftSide="false" title="Moving around" desc="Moving in virtual reality is a complicated topic since the user's brain often is confused when moving in VR but not in the real world. For this reason, I implemented a teleportation mechanism, where a parabolic arc shows where the user will be teleported to." />

<VideoBlock video="lift" :onLeftSide="true" title="Lift" desc="As a fun little feature, I made a functional lift. The user simply has to stand in front of it to open the doors. When the user enters, the doors are being closed and the lift starts moving." />

<VideoBlock video="tutorial" :onLeftSide="false" title="Interactive tutorial" desc="Having to explain how the controls work while someone is wearing a VR headset sucks. During an interactive tutorial at the beginning of the experience, the user is prompted to do various tasks, which takes the burden (or at least some of it) from the presenter's shoulders and in general is a great way to have a user learn the controls." />

<ImageBlock image="immersion_helper.jpg" :onLeftSide="true" title="Helper texts" desc="During the experience, small helper texts appear next to the controller, which remember the user how to do something." />

<VideoBlock video="position" :onLeftSide="false" title="Telling the user where the UI is" desc="If a user is standing too close to an object when wanting to change materials, the material selection will appear left, right or behind him or her. To avoid confusion, the voice that was present during the tutorial will tell the user where the material selection appears." />


## Designing the building

It was important to me that not only the controls are nice to use, but also the building fun to explore, yadda yadda.

<ImageBlock image="immersion_sketches.jpg" :onLeftSide="true" title="Sketching" desc="To come up with ideas for the building, I did a lot of collecting reference photos and inspiration, sketching concepts on paper and then roughly modeling them in Blender." />

<ImageBlock image="immersion_modeling.jpg" :onLeftSide="false" title="3D Modeling" desc="3D Modeling was entirely done using Blender. Blender's great viewport options allowed to quickly see how the foyer looks with lights and some basic materials." />

<ImageBlock image="immersion_baking.jpg" :onLeftSide="true" title="Baking" desc="For a lot of models in the scene, I created a high poly version and a low poly version. The normals of the high poly version were then baked in Substance Painter and applied to the low poly version to create a highly detailed look while having an efficient 3D model." />


#### Texture Creation{style="text-align:center"}
For this project, I created a bunch of materials in Substance Designer and reused some I've already created for cgbookcase.com. I also published [breakdowns of two materials created for this project](https://www.cgbookcase.com/learn/immersion-vr-substance-designer-material-breakdowns).


### Results

Here are some screenshots from the building in it's final state. The images are lightly edited.

![alt](/uploads/immersion_banner_01.jpg){class="wide"}

![alt](/uploads/immersion_banner_02.jpg){class="wide"}

![alt](/uploads/immersion_banner_03.jpg){class="wide"}

## Development
Development was done using Unreal Engine 4 and C++. I had no prior experience working with C++ and almost none using Unreal Engine 4, so this was the most time-consuming part.

The entire code of this project can be found on the [GitHub repository](https://github.com/dorianzgraggen/ImmersionVR) of this project.

## Further information
This project was done as my "Maturitätsarbeit" (kind of a final thesis or project) at the school I was going to.

## Credits

::: projectul 
- Voice Acting: Selma Schwager (german), Liv Weiss (english)
- Supervision: Hanspeter Siegfried, Deborah Signer
- [Hand 3D model](https://www.blendswap.com/blend/16177) created by SuperDasil
- Chair and table 3D models are based on models from Vitra.
- Sink and toilets are from Kohler.
:::