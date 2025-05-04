function simpleEjaculation() {
  let html = "";
  for (let i = 0; i < V.enemynomax; i++) {
    if (V.NPCList[i].stance == "defeated") continue;

    if (V.consensual == 1) wikifier("famesex", 1);
    else wikifier("famerape", 1);

    wikifier("personselect", i);

    if (wearingCondom(i)) {
      if (V.NPCList[i]?.condom?.state == "defective") T.condomResult = "leaked";
      else if (V.NPCList[i]?.condom?.state == "defective")
        T.condomResult = "burst";
      else T.condomResult = "contained";
    } else {
      T.condomResult = "none";
    }

    if (T.condomResult == "contained") {
      T.nn = i;
      const _html = wikifier("genericCondomEjaculation").textContent;
      html += `${_html.replace(/\t/g, "").trim()}<br><br>`;
      return;
    }

    if (
      V.NPCList[i].penis.includes("vagina") ||
      V.NPCList[i].penis.includes("anus") ||
      V.NPCList[i].penis.includes("mouth")
    ) {
      let words = [];
      let _html = "";
      let more;

      switch (V.NPCList[i].penis) {
        case "vagina":
        case "vaginadouble":
          wikifier("vaginalejacstat");
          wikifier("bodyliquid", "vagina", "semen");
          wikifier(
            "recordVaginalSperm",
            "pc",
            `$NPCList[${i}]`,
            `($enemytype is "man" ? "human" : $NPCList[${i}].type)`
          );
          wikifier(
            "recordSperm",
            `{target: "pc", spermOwner: $NPCList[${i}], spermType: $enemytype is "man" ? "human" : $NPCList[${i}].type, rngModifier: 50}`
          );
          words = [
            lanSwitch(
              `Your <<pussy>> is so good, damn, I'm cumming!" As $NPCList[${i}].fullDescription thrust, <<he>> ejaculate deep into your womb.`,
              `"你的<<pussy>>实在太舒服了，该死，要射了。" $NPCList[${i}].fullDescription 一边抽插着，一边在你子宫深处射出了种子液。`
            ),

            lanSwitch(
              `<<He>> grabs your hair and thrusts <<his>> $NPCList[${i}].penisdesc deep into your <<pussy>> as <<he>> cums. You feel semen splash inside.`,
              `<<He>>拉住你的头发并用<<his>>的$NPCList[${i}].penisdesc深深地在你<<pussy>>里灌注精液。你感觉到大量的精液在从你体内迸溅而出。`
            ),

            lanSwitch(
              `<<He>> <span class="purple">grasps your throat</span> and pounds <<his>> $NPCList[${i}].penisdesc into you as <<he>> cums. Semen fills your <<pussy>> as you gasp for air.`,
              `<<He>><span class="purple">紧紧地握紧你的喉咙</span>并用<<his>>$NPCList[${i}].penisdesc重重地插入你的子宫深处射精。趁着精液灌满了你的<<pussy>>的空档，你大大喘了口气。`
            ),

            lanSwitch(
              `With a low growl, <<he>> rams <<his>> $NPCList[${i}].penisdesc into your wet <<pussy>>, filling you with hot, thick cum. You can't help but moan as t<<he>> pleasure overwhelms you.`,
              `伴随着一声低沉的咆哮，<<he>>将自己$NPCList[${i}].penisdesc狠狠地插入你湿润的子宫深处，炽热浓稠的精液迅速填满了你的身体。你无法抑制地发出呻吟声，愉悦感瞬间席卷全身。`
            ),

            lanSwitch(
              `<<He>> lifts you up, slamming <<his>> $NPCList[${i}].penisdesc deep into your <<pussy>>, and cums with a loud groan. You feel t<<he>> warm rush of <<his>> seed flooding your core.`,
              `<<He>>把你抱起，将自己$NPCList[${i}].penisdesc狠狠地插入你深处，并伴随着一声低沉的呻吟射出精液。你感受到一股温热的液体迅速充斥着你的身体核心。`
            ),

            lanSwitch(
              `<<He>> kisses you hard, then rams <<his>> $NPCList[${i}].penisdesc into your <<pussy>>, cumming with a deep growl. You feel t<<he>> flood of <<his>> seed inside you.`,
              `<<He>>狠狠地吻住你，然后将自己$NPCList[${i}].penisdesc猛然插入你的子宫深处，在一声低沉的咆哮中射出精液。你感受到一股强烈的液体在体内涌动。`
            ),

            lanSwitch(
              `As <<he>> cums, <<his>> body shudders and <<he>> fills your <<pussy>> with thick, warm seed. You can't help but groan in pleasure as t<<he>> sensation floods your mind.`,
              `当<<he>>射精时，<<his>>身体剧烈颤抖，将浓稠温热的精液注入你的子宫深处。你无法抑制地发出愉悦的呻吟声，感官被强烈的快感充斥。`
            ),

            lanSwitch(
              `You feel <<his>> $NPCList[${i}].penisdesc pulse and spurt deep inside you as <<he>> cums, t<<he>> sensation sending waves of pleasure through your body.`,
              `当你感受到<<he>>的$NPCList[${i}].penisdesc在体内脉动和喷射时，强烈的快感如潮水般席卷全身。`
            ),

            lanSwitch(
              `With a final thrust, <<he>> empties <<his>> seed deep into your <<pussy>>, leaving you trembling with t<<he>> aftermath of <<his>> powerful climax.`,
              `随着最后一阵猛烈的抽插，<<he>>将精液深深射入你的子宫深处，让你在余韵中颤抖不已。`
            ),

            lanSwitch(
              `"Mmm... your <<pussy>> is so tight, I can't hold back!" <<he>> cums deep inside you as <<he>> thrusts harder.`,
              `"啊...你太紧了，我忍不住了！" <<he>>一边说着，一边将精液射入你体内，并更加用力地抽插。`
            ),

            lanSwitch(
              `<<He>> groans, "I'm gonna fill you up, baby..." and with one final thrust, <<he>> cums inside your <<pussy>>.`,
              `<<He>>呻吟着：“我要把你填满，宝贝……”随后一阵猛烈的抽插后，将精液射入你的子宫深处。`
            ),

            lanSwitch(
              `"You feel so good... I'm coming!" <<he>> rams <<his>> $NPCList[${i}].penisdesc into your <<pussy>>, spilling <<his>> seed.`,
              `"你感觉太棒了……我要射了！" <<he>>将自己$NPCList[${i}].penisdesc狠狠插入你的子宫深处，喷洒出精液。`
            ),

            lanSwitch(
              `<<He>> whispers, "Only for you..." before cumming deep inside your <<pussy>>, <<his>> body trembling with pleasure.`,
              `<<He>>低声说道：“只属于你……”随后将精液射入你的子宫深处，身体因愉悦而颤抖。`
            ),

            lanSwitch(
              `"Oh yeah... that's it!" <<he>> cums hard, filling your <<pussy>> with thick, hot cum as you both gasp for breath.`,
              `"哦，对……就是这样！" <<he>>猛地射出精液，将浓稠温热的液体注入你的子宫深处，你们都大口喘着气。`
            ),
          ];

          more = true;
          _html = words.random();

          if (V.NPCList[i].penissize >= 4) {
            wikifier("thighejacstat");
            wikifier("vaginalentranceejacstat");
            wikifier("bodyliquid", "thigh", "semen");
            wikifier("bodyliquid", "vaginaoutside", "semen");
          }
          break;
        case "anus":
        case "anusdouble":
          // V.thirst -= 200
          wikifier("hunger", -200);
          wikifier("analejacstat");
          wikifier("bodyliquid", "anus", "semen");
          wikifier(
            "recordAnusSperm",
            "pc",
            `$NPCList[${i}]`,
            `($enemytype is "man" ? "human" : $NPCList[${i}].type)`
          );
          words = [
            lanSwitch(
              `"Your ass is so good, damn, I'm cumming!" As $NPCList[${i}].fullDescription thrust, <<he>> ejaculate deep into your anal.`,
              `"你的菊穴实在太舒服了，该死，要射了。" $NPCList[${i}].fullDescription 一边抽插着，一边在你肠道深处射出了种子液。`
            ),

            lanSwitch(
              `<<He>> grabs your hair and thrusts <<his>> $NPCList[${i}].penisdesc deep into your ass as <<he>> cums. You feel semen splash inside.`,
              `<<He>>拉住你的头发并用<<his>>的$NPCList[${i}].penisdesc深深地在你菊穴里灌注精液。你感觉到大量的精液在从你肠内迸溅而出。`
            ),

            lanSwitch(
              `<<He>> <span class="purple">grasps your throat</span> and pounds <<his>> $NPCList[${i}].penisdesc into you as <<he>> cums. Semen fills your anus as you gasp for air.`,
              `<<He>><span class="purple">紧紧地握紧你的喉咙</span>并用<<his>>$NPCList[${i}].penisdesc重重地插入你的肠道深处射精。趁着精液灌满了你的肠道的空档，你大大喘了口气。`
            ),

            lanSwitch(
              `As <<he>> thrusts <<his>> $NPCList[${i}].penisdesc deep into your ass, <<he>> lets out a loud moan and cums inside you. T<<he>> warmth spreads through your rectum.`,
              `当<<he>>将<<his>>$NPCList[${i}].penisdesc深深地插入你的菊穴时，发出一声响亮的呻吟，并在你体内射出精液。温热感从你的直肠蔓延开来。`
            ),

            lanSwitch(
              `With a rough grip, <<he>> shoves <<his>> $NPCList[${i}].penisdesc into your ass and cums hard. You feel t<<he>> thick seed fill you up.`,
              `用粗糙的力道，<<he>>将<<his>>$NPCList[${i}].penisdesc猛地插进你的菊穴并用力射出。你感觉浓稠的精液灌满了你的身体。`
            ),

            lanSwitch(
              `<<He>> slams <<his>> $NPCList[${i}].penisdesc into your ass, filling you with a deep and powerful cumshot. You can't help but gasp from t<<he>> intensity.`,
              `<<He>>将<<his>>$NPCList[${i}].penisdesc狠狠地插进你的菊穴，用一阵强烈的射精填满你。你无法抑制从这强烈快感中发出的喘息声。`
            ),

            lanSwitch(
              `<<He>> leans in, whispering, "You're so tight..." before burying <<his>> $NPCList[${i}].penisdesc deep into your ass and cums. You feel t<<he>> hot liquid spurt inside.`,
              `<<He>>靠近耳边低语：“你太紧了……”然后将<<his>>$NPCList[${i}].penisdesc狠狠地插进你的菊穴并射出。你感受到滚烫的精液在体内喷涌而出。`
            ),

            lanSwitch(
              `<<He>> pulls you close, slamming <<his>> $NPCList[${i}].penisdesc into your ass as <<he>> cums. You're left gasping with t<<he>> force of it.`,
              `<<He>>将你拉近，用力将<<his>>$NPCList[${i}].penisdesc插入你的菊穴并射精。你被这股力量弄得喘不过气来。`
            ),

            lanSwitch(
              `With a sudden burst, <<he>> thrusts <<his>> $NPCList[${i}].penisdesc deep into your ass and cums hard. T<<he>> sensation is overwhelming.`,
              `在一阵突如其来的冲动中，<<he>>将<<his>>$NPCList[${i}].penisdesc深深插进你的菊穴并用力射精。这种感觉让人难以承受。`
            ),

            lanSwitch(
              `<<He>> rams <<his>> $NPCList[${i}].penisdesc into your ass, letting out a guttural moan as <<he>> cums deep inside you.`,
              `<<He>>猛地将<<his>>$NPCList[${i}].penisdesc插进你的菊穴，发出一声低沉的呻吟，在你体内射出精液。`
            ),

            lanSwitch(
              `<<He>> mutters, "You feel so good..." as <<he>> drives <<his>> $NPCList[${i}].penisdesc deep into your ass and cums. You can't help but shudder.`,
              `<<He>>低声说道：“你里面的感觉太棒了……”随后将<<his>>$NPCList[${i}].penisdesc深深插入你的菊穴并射出。你不由自主地颤抖起来。`
            ),

            lanSwitch(
              `<<He>> grins, "You're mine now..." as <<he>> pounds <<his>> $NPCList[${i}].penisdesc into your ass and cums with a loud groan.`,
              `<<He>>露出一丝笑容：“你现在是我的了……”随后用<<his>>$NPCList[${i}].penisdesc狠狠地插入你的菊穴，并伴随着一声低吼射出精液。`
            ),

            lanSwitch(
              `<<He>> whispers, "Don't move..." as <<he>> thrusts <<his>> $NPCList[${i}].penisdesc deep into your ass and cums with a satisfied sigh.`,
              `<<He>>轻声说道：“别动……”随后将<<his>>$NPCList[${i}].penisdesc深深插入你的菊穴，并带着满足的叹息射出精液。`
            ),

            lanSwitch(
              `<<He>> growls, "You're going to take it all..." as <<he>> slams <<his>> $NPCList[${i}].penisdesc into your ass and cums hard.`,
              `<<He>>咆哮道：“你得全部接住……”随后将<<his>>$NPCList[${i}].penisdesc狠狠地插进你的菊穴并强力射精。`
            ),
          ];

          more = true;
          _html = words.random();

          break;
        case "mouth":
          V.thirst -= 200;
          wikifier("hunger", -200);
          wikifier("oralejacstat");
          wikifier(
            "cumswallow",
            V.NPCList[i].type,
            null,
            npcSemenMod(V.NPCList[i].penissize)
          );

          words = [
            lanSwitch(
              `<<He>> moans in plesure and ejaculates a big amount of cum to your throat as <<he>>'s fucking your mouth.`,
              `<<He>>舒服地呻吟着，一边操弄你的嘴巴一边将大量的精液射进你的喉咙。`
            ),
            lanSwitch(
              `<<He>> grinds <<his>> cock in your mouth, making you choke on t<<he>> thick cumshot that fills your throat.`,
              `<<He>>在你嘴里摩擦着自己的阴茎，让你被浓稠的精液呛到，填满了你的喉咙。`
            ),
            lanSwitch(
              `<<He>> pumps <<his>> thick cum deep into your throat as <<he>> forces your head to move up and down on <<his>> cock.`,
              `<<He>>将浓密的精液射进你的喉咙深处，同时强迫你用头上下移动在<<his>>阴茎上。`
            ),
            lanSwitch(
              `<<He>> cums in your mouth, t<<he>> thick jets of cum filling your throat and making you swallow it all.`,
              `<<He>>在你嘴里射精，浓稠的精液喷射进你的喉咙，让你全部吞了下去。`
            ),
            lanSwitch(
              `<<He>> pulls out just as <<he>> cums, spilling a thick load into your mouth from close range.`,
              `<<He>>在射精前突然抽出，在近距离内将一注浓稠的精液射进你的嘴里。`
            ),
            lanSwitch(
              `<<He>> fills your throat with <<his>> cum while you kneel and take it all in, unable to resist t<<he>> urge to swallow.`,
              `<<He>>用精液填满你的喉咙，你跪在地上，无法抗拒地吞咽着这一切。`
            ),
            lanSwitch(
              `<<He>> cums hard into your mouth, making you choke and gasp as you try to take it all in.`,
              `<<He>>用力将精液射进你的嘴里，让你呛住并喘不过气来，努力想要全部吞下。`
            ),
            lanSwitch(
              `<<He>> whispers, "Swallow it all, baby. I want you to feel every drop."`,
              `<<He>>低语道："全部吞下去，宝贝。我想让你感受到每一滴。"`
            ),
            lanSwitch(
              `<<He>> growls, "You love taking my cum, don't you?"`,
              `<<He>>咆哮着："你想要我的精液，对吧？"`
            ),
            lanSwitch(
              `<<He>> moans, "Your mouth is so tight... I can't hold back."`,
              `<<He>>呻吟道："你的嘴太紧了……我忍不住了。"`
            ),
            lanSwitch(
              `<<He>> gasps, "I'm coming... oh god, you're amazing."`,
              `<<He>>喘息着："我要射了……哦，你真棒。"`
            ),
            lanSwitch(
              `<<He>> murmurs, "Suck me harder. I want to fill your throat."`,
              `<<He>>低语："再用力吸点。我想填满你的喉咙。"`
            ),
            lanSwitch(
              `<<He>> laughs, "You can't even handle my cum, can you?"`,
              `<<He>>笑着："你连我的精液都承受不了，是吧？"`
            ),
          ];

          more = true;
          _html = words.random();

          break;

        case "vaginaentrance":
        case "vaginaentrancedouble":
        case "vaginaimminent":
        case "vaginaimminentdouble":
          wikifier("vaginalentranceejacstat");
          wikifier("bodyliquid", "vaginaoutside", "semen");
          wikifier("bodyliquid", "thigh", "semen");
          wikifier(
            "recordSperm",
            `{target: "pc", spermOwner: $NPCList[${i}], spermType: $enemytype is "man" ? "human" : $NPCList[${i}].type, rngModifier: 15, rngType: "canWash"}`
          );

          _html = lanSwitch(
            `While <<he>> is still rubbing <<his>> $NPCList[${i}].penisdesc on your <<pussy>>, as moan <<he>> cum out a small amount of semen to coat on your <<pussy>>.`,
            "<<He>>还在外部磨蹭着的时候，舒服地射出少量精液涂抹在你的<<pussy>>上。"
          );
          break;

        case "anusentrace":
        case "anusentrancedouble":
        case "anusimminent":
        case "anusimminentdouble":
          wikifier("bottomejacstat");
          wikifier("bodyliquid", "bottom", "semen");
          wikifier("bodyliquid", "thigh", "semen");
          wikifier("hunger", -200);

          _html = lanSwitch(
            `While <<he>> is still rubbing <<his>> $NPCList[${i}].penisdesc on your butts, as moan <<he>> cum out a small amount of semen to coat on your cheeks.`,
            "<<He>>还在外部磨蹭着的时候，舒服地射出少量精液涂抹在你的股沟上。"
          );
      }

      // V.hygiene += 500
      wikifier("ejacstat");

      if (_html.length > 0 && more) {
        words = [
          lanSwitch(
            `Even <<he>> just cum but <<his>> $NPCList[${i}].penisdesc still hard, hard enough to continues fuck you.`,
            `明明射了但<<his>>的$NPCList[${i}].penisdesc依旧坚挺，继续操弄着你。`
          ),
          lanSwitch(
            `Even those <<he>> still not satisfied, <<his>> $NPCList[${i}].penisdesc even fucks harder and harder, with a low growls <<he>> continues to shake <<his>> hips and fuck you hard.`,
            `即使如此<<he>>依然不满足，<<his>>的$NPCList[${i}].penisdesc甚至越战越猛，越战越坚挺，<<he>>低吼一声继续摆动腰身狠狠地操干你。`
          ),
          lanSwitch(
            "Although <<he>> has just cum, but <<he>> quickly recovers and vigorously slaps your ass then continues <<his>> move.",
            "虽然刚射精，但<<he>>很快又恢复了过来，大力拍了拍你的屁股然后继续刚才的动作。"
          ),
          lanSwitch(
            `Even after shooting <<his>> load, <<his>> $NPCList[${i}].penisdesc is still hard and keeps pumping into you like a piston, each thrust making your body tremble with pleasure.`,
            `即使射完精，<<his>>的$NPCList[${i}].penisdesc依然坚挺，像活塞一样不断往你体内插，每一次撞击都让你的身体因快感而颤抖。`
          ),
          lanSwitch(
            `<<He>>'s not done yet, <<his>> $NPCList[${i}].penisdesc is still rock solid and <<he>> keeps slamming into you like a beast, moaning with pure lust.`,
            `<<He>>还没完，<<his>>的$NPCList[${i}].penisdesc依然坚硬如铁，像野兽一样不断往你体内撞击，发出充满欲望的呻吟。`
          ),
          lanSwitch(
            `<<He>>'s still hard and ready for more, <<his>> $NPCList[${i}].penisdesc is thick and pulsing with energy, fucking you even harder than before.`,
            `<<He>>依然坚挺，准备再来一轮，<<his>>的$NPCList[${i}].penisdesc又粗又硬，充满能量地往你体内疯狂插入，比之前更用力。`
          ),
          lanSwitch(
            `<<He>>'s not done, <<his>> $NPCList[${i}].penisdesc is still pumping like a machine, not stopping until <<He>>'s completely drained.`,
            `<<He>>还没完，<<his>>的$NPCList[${i}].penisdesc像机器一样持续插入，一刻不停，直到彻底耗尽。`
          ),
          lanSwitch(
            `<<He>>'s still hard and wants more, <<his>> $NPCList[${i}].penisdesc is so big and thick that it keeps fucking you without rest.`,
            `<<He>>依然坚挺，想要更多，<<his>>的$NPCList[${i}].penisdesc又粗又长，不断往你体内插入，毫不停歇。`
          ),
          lanSwitch(
            `<<He>>'s not done yet, <<his>> $NPCList[${i}].penisdesc is still hard and keeps slamming into you with wild intensity.`,
            `<<He>>还没完，<<his>>的$NPCList[${i}].penisdesc依然坚挺，用疯狂的力度不断往你体内撞击。`
          ),
          lanSwitch(
            `<<He>>'s still going, <<his>> $NPCList[${i}].penisdesc is so hard and thick that it doesn't stop fucking you, even after cumming.`,
            `<<He>>还在继续，<<his>>的$NPCList[${i}].penisdesc又硬又粗，即使射精了也不停止往你体内插入。`
          ),
          lanSwitch(
            `<<He>>grunts, "Don't you dare stop, I'm not done yet!" as <<his>> $NPCList[${i}].penisdesc keeps slamming into you with brutal force.`,
            `<<He>>喘着粗气喊道：“别他妈停下，我还没完！”<<his>>的$NPCList[${i}].penisdesc用暴虐的力量不断往你体内撞击。`
          ),
          lanSwitch(
            `<<He>>moans, "You feel so good, I can't stop!" as <<his>> $NPCList[${i}].penisdesc pumps into you like a wild animal.`,
            `<<He>>呻吟着：“你他妈真他妈爽，我停不下来！”<<his>>的$NPCList[${i}].penisdesc像野兽一样往你体内疯狂插入。`
          ),
          lanSwitch(
            `"More! I need more!" <<he>> yells, while <<his>> $NPCList[${i}].penisdesc continues to fuck you without mercy.`,
            `“还要！我还需要！”<<he>>大喊着，<<his>>的$NPCList[${i}].penisdesc毫不留情地往你体内插入。`
          ),
          lanSwitch(
            `You whimpered, signaling him that you can't take more, but <<he>> just growls, "Shut up and take it!" as <<his>> $NPCList[${i}].penisdesc keeps pounding into you.`,
            `你呜咽着表示自己再也受不了了，但<<<<he>>>>只是低吼：“闭嘴给我接着！”<<his>>的$NPCList[${i}].penisdesc继续疯狂往你体内插入。`
          ),
          lanSwitch(
            `"You love this, don't you?" <<he>> whispers, as <<his>> $NPCList[${i}].penisdesc continues to fuck you with relentless passion.`,
            `“你他妈就是喜欢这个，对吧？”<<he>>低语着，<<his>>的$NPCList[${i}].penisdesc用无法抗拒的激情不断往你体内插入。`
          ),
          lanSwitch(
            `"I'm not done yet," <<he>> says, breathing heavily as <<his>> $NPCList[${i}].penisdesc keeps fucking you like a machine.`,
            `“我他妈还没完，”<<he>>喘着粗气说，<<his>>的$NPCList[${i}].penisdesc像机器一样不断往你体内插入。`
          ),
          lanSwitch(
            `"I want to fuck you until you can't move," <<he>> rasps, while <<his>> $NPCList[${i}].penisdesc continues to pump into you without pause.`,
            `“我要操到你动不了为止，”<<he>>沙哑地说道，<<his>>的$NPCList[${i}].penisdesc不断往你体内插入，毫不停歇。`
          ),
          lanSwitch(
            `You gasp, "Please stop..." but <<he>> just laughs and keeps fucking you harder, <<his>> $NPCList[${i}].penisdesc still rock solid.`,
            `你喘着气说：“求你停下……”但<<<<he>>>>只是笑着继续往你体内插入，<<his>>$NPCList[${i}].penisdesc依然坚硬如铁。`
          ),
          lanSwitch(
            `You groan, "Ngh... so good..." as <<his>> $NPCList[${i}].penisdesc continues to ram into you with no mercy.`,
            `你呻吟着：“嗯……好舒服……”<<his>>的$NPCList[${i}].penisdesc毫不留情地不断往你体内撞击。`
          ),
          lanSwitch(
            `You moan, "Mmm... don't stop..." as <<his>> $NPCList[${i}].penisdesc pumps into you with relentless force.`,
            `你呻吟着：“嗯……别停下……”<<his>>的$NPCList[${i}].penisdesc用无法抗拒的力量不断往你体内插入。`
          ),
          lanSwitch(
            `You whine, "P-please... I can't take it..." but <<he>> just keeps fucking you harder and harder.`,
            `你呜咽着：“求求你……我受不了了……”但<<<<he>>>>只是继续往你体内更用力地插入。`
          ),
          lanSwitch(
            `You gasp, "Ahh... so deep..." as <<his>> $NPCList[${i}].penisdesc keeps pounding into you without pause.`,
            `你喘着气：“啊……好深……”<<his>>的$NPCList[${i}].penisdesc不断往你体内插入，毫不停歇。`
          ),
          lanSwitch(
            `You whimper, "Ngh... more..." as <<his>> $NPCList[${i}].penisdesc continues to fuck you with wild intensity.`,
            `你呜咽着：“嗯……还要……”<<his>>的$NPCList[${i}].penisdesc用疯狂的力度不断往你体内插入。`
          ),
          lanSwitch(
            `You scream, "I'm gonna cum again!" as <<his>> $NPCList[${i}].penisdesc keeps slamming into you like a beast.`,
            `你尖叫着：“我要又高潮了！”<<his>>的$NPCList[${i}].penisdesc像野兽一样不断往你体内撞击。`
          ),
          lanSwitch(
            `You moan, "I can't... I'm so close..." as <<his>> $NPCList[${i}].penisdesc pumps into you with brutal force.`,
            `你呻吟着：“我……快不行了……”<<his>>的$NPCList[${i}].penisdesc用暴虐的力量不断往你体内插入。`
          ),
          lanSwitch(
            `You beg, "Don't stop... I'm so wet..." as <<his>> $NPCList[${i}].penisdesc keeps fucking you without mercy.`,
            `你哀求着：“别停下……我湿透了……”<<his>>的$NPCList[${i}].penisdesc毫不留情地不断往你体内插入。`
          ),
          lanSwitch(
            `You're so overwhelmed by t<<he>> brutal fucking that you can't even think straight, your body just reacts on instinct as <<his>> $NPCList[${i}].penisdesc slams into you without mercy.`,
            `你被这暴烈的操弄弄得完全无法思考，身体只能本能地反应，<<his>>$NPCList[${i}].penisdesc毫不留情地不断往你体内撞击。`
          ),
          lanSwitch(
            `You're so lost in t<<he>> pain and pleasure that you can't even process what's happening, just feeling <<his>> $NPCList[${i}].penisdesc pounding into you like a machine.`,
            `你在疼痛和快感中彻底迷失，根本无法理解发生了什么，只能感觉<<his>>$NPCList[${i}].penisdesc像机器一样不断往你体内插入。`
          ),
          lanSwitch(
            `You're so shocked by t<<he>> force that you just stare blankly, not even realizing <<his>> $NPCList[${i}].penisdesc is still ramming into you like a madman.`,
            `你被这股力量惊得呆若木鸡，根本没意识到<<his>>$NPCList[${i}].penisdesc还在像疯子一样不断往你体内撞击。`
          ),
          lanSwitch(
            `You're so overwhelmed that tears well up in your eyes, but <<his>> $NPCList[${i}].penisdesc doesn't stop, still fucking you with brutal intensity.`,
            `你被彻底压垮，眼泪在眼眶里打转，但<<his>>$NPCList[${i}].penisdesc毫不停歇，依然用暴虐的力度不断往你体内插入。`
          ),
          lanSwitch(
            `You're so caught off guard that you can't even react, just letting <<his>> $NPCList[${i}].penisdesc slam into you like a wild animal.`,
            `你被这突如其来的操弄搞得措手不及，根本无法反应，只能让<<his>>$NPCList[${i}].penisdesc像野兽一样不断往你体内撞击。`
          ),
          lanSwitch(
            `Your mind goes blank from t<<he>> relentless fucking, and all you can do is feel <<his>> $NPCList[${i}].penisdesc pounding into you like a war machine.`,
            `你被这无休止的操弄搞得大脑一片空白，只能感觉<<his>>$NPCList[${i}].penisdesc像战争机器一样不断往你体内插入。`
          ),
          lanSwitch(
            `You're so overwhelmed that you can't even cry out, just letting <<his>> $NPCList[${i}].penisdesc keep fucking you with no mercy.`,
            `你被彻底压垮，连喊叫的力气都没有了，只能让<<his>>$NPCList[${i}].penisdesc毫不留情地不断往你体内插入。`
          ),
          lanSwitch(
            `You're so lost in t<<he>> moment that you don't even realize <<his>> $NPCList[${i}].penisdesc is still ramming into you like a beast, making you cry out involuntarily.`,
            `你在这一刻彻底迷失，甚至没意识到<<his>>$NPCList[${i}].penisdesc还在像野兽一样不断往你体内撞击，让你不由自主地发出呻吟。`
          ),
        ];

        _html += `${words.random()}<br><br>`;
      } else if (_html.length > 0) {
        _html += "<br><br>";
      }

      html += _html;
    }

    if (
      !V.gloryhole &&
      (V.NPCList[i].penis.includes("penis") || V.NPCList[i].penis == 0)
    ) {
      // V.hygiene += 500
      wikifier("tummyejacstat");
      wikifier("ejacstat");
      wikifier("bodyliquid", "tummy", "semen");
    }
  }

  console.log("T<<his>> is a debug message");

  if (html.length > 2) {
    console.log(html);
    T.outputHtml += html;
  }
}

function longerCombat() {
  if (V.combat == 1 && V.stalk !== true) {
    const { mult, ejacRate, midEjac, moreRate, moreTimes } =
      iMod.getCf("longerCombat");

    if (!setup.longerCombat) {
      console.log("longer combat is running.");
      setup.longerCombat = true;
    }

    if (V.lastejaculated == undefined) {
      V.lastejaculated = 0;
      V.overEjaculated = 0;
    }

    if (V.enemyarousalmax % 100 == 0) {
      V.enemyarousalmax =
        V.enemyarousalmax * mult + random(1, 99) + Math.random();
    }

    T.outputHtml = "";

    if (
      Math.floor(V.enemyarousal / 500) > Math.floor(V.lastejaculated / 500) &&
      V.NPCList[0].penis &&
      V.NPCList[0].penis !== "none"
    ) {
      V.lastejaculated = V.enemyarousal;
      if (midEjac == true && random(100) <= ejacRate) {
        simpleEjaculation();
        V.finish = 0;
        T.endcombat = 0;
      }
    }

    if (
      random(100) < moreRate &&
      V.enemyarousal / V.enemyarousalmax >= 0.9 &&
      V.overEjaculated < moreTimes
    ) {
      V.enemyarousal =
        V.enemyarousal - (V.enemyarousalmax * 0.3 + random(50, 500));
      V.finish = 0;
      T.endcombat = 0;
      V.overEjaculated++;

      const source = Story.get(V.passage).text;
      const result = source.match(
        /<<link(.+)(Next|继续)([\s\S]*?)>>(.+|)<<\/link>>/
      );
      let code = "";
      if (result[4] && result[4].length > 0) {
        code = result[4];
      }
      console.log("one more time from longer combat!", V.passage, result);

      T.outputHtml += lanSwitch(
        `"You are so great, we should do one more time!" ${
          V.enemynomax > 1 ? "they say" : "<<person1>><<person>> says"
        }.`,
        `“你太棒了，我们应该再来一次！”${
          V.enemynomax > 1 ? "<<he>>们" : "<<person1>><<person>>"
        }说道。`
      );

      T.outputHtml += "<br><br>";

      setTimeout(() => {
        new Wikifier(
          null,
          `<<replace span#next>><<link ${lanSwitch(
            "Next",
            "继续"
          )} $passage>>${code}<</link>><</replace>>`
        );
      }, 60);
    }
  } else {
    setup.longerCombat = false;
    V.lastejaculated = undefined;
    V.overEjaculated = undefined;
  }

  return "";
}

DefineMacroS("longerCombat", longerCombat);

function checkLCM() {
  setup.longerCombatInit = true;
}

Save.onLoad.add(checkLCM);

function longerCombatInit() {
  if (!iMod.has("Configs", "longerCombat")) {
    iMod.setCf("longerCombat", {
      mult: 2.5,
      midEjac: true,
      ejacRate: 80,
      moreRate: 25,
      moreTimes: 3,
      time: 1,
    });

    // delete old variables
    if (V.iModConfigs.longerMult) {
      delete V.iModConfigs.longerMult;
    }
  }
}

$(document).on(":passageinit", () => {
  // 初始化
  if (setup.longerCombatInit === true) {
    setTimeout(() => {
      longerCombatInit();
      delete setup.longerCombatInit;
    }, 30);
  } else if (passage() == "Start") {
    setTimeout(() => {
      longerCombatInit();
    }, 100);
  }
});

$(document).on(":passagedisplay", () => {
  if (T.outputHtml) {
    new Wikifier(null, `<<prepend #passages>>${T.outputHtml}<br><</prepend>>`);
  }
});

TimeHandle.set("onBefore", {
  eventId: "longerCombat",
  func(passData) {
    if (V.combat == 1 && V.stalk !== true) {
      passData.passed = iMod.getCf("longerCombat").time * 60;
    }
  },
});
