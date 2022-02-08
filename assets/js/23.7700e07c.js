(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{425:function(e,t,v){"use strict";v.r(t);var _=v(56),s=Object(_.a)({},(function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h1",{attrs:{id:"第-4-章-贵族专制、民主政治和系统设计-aristocracy-democracy-and-system-design"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#第-4-章-贵族专制、民主政治和系统设计-aristocracy-democracy-and-system-design"}},[e._v("#")]),e._v(" 第 4 章 贵族专制、民主政治和系统设计（Aristocracy, Democracy, and System Design）")]),e._v(" "),v("p",[e._v("大教堂是艺术史上无与伦比的成就。它的原则既不乏味也不混乱..真正达到了风格上的极致，完成这件作品的艺术家们，完全领会和吸收了以往的成功经验，也完全掌握了他们那个时代的技术，而且在应用的时候做到了恰如其分，绝不轻率，也绝不花哨。")]),e._v(" "),v("p",[e._v("正是 Jean d 'Orbais 构思了建筑的整体设计，这个设计得到了后继者的认同，至少在本质上如此。这也是这个建筑如此和谐统一的原因之一。")]),e._v(" "),v("p",[e._v("——兰斯大教堂指南")]),e._v(" "),v("p",[e._v("This great church is an incomparable work of art. There is neither aridity nor confusion in the tenets it sets forth. . . . It is the zenith of a style, the work of artists who had understood and assimilated all their predecessors ' successes, in complete possession of the techniques of their times, but using them without indiscreet display nor gratuitous feats of skill.")]),e._v(" "),v("p",[e._v("It was Jean d 'Orbais who undoubtedly conceived the general plan of the building, a plan which was respected, at least in its essential elements, by his successors. This is one of the reasons for the extreme coherence and unity of the edifice.")]),e._v(" "),v("p",[e._v("——REIMS CATHEDRAL GUIDEBOOK")]),e._v(" "),v("h2",{attrs:{id:"概念一致性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#概念一致性"}},[e._v("#")]),e._v(" 概念一致性")]),e._v(" "),v("p",[e._v('绝大多数欧洲的大教堂中，由不同时代、不同建筑师所建造的各个部分之间，在设计或结构风格上都存在着许多差异。后来的建筑师总是试图在原有建筑师的基础上有所"提高"，以反映他们在设计风格和个人品味上的改变。所以，在雄伟的哥特式的教堂上，依附着祥和的诺曼第风格十字架，它在显示上帝荣耀的同时，展示了同样属于建筑师的骄傲。')]),e._v(" "),v("p",[e._v("与之对应的是，法国城市兰斯（Reims）在建筑风格上的一致性和上面所说的大教堂形成了鲜明的对比。设计的一致性和那些独到之处一样，同样让人们赞叹和喜悦。如同旅游指南所述，风格的一致和完整性来自 8 代拥有自我约束和牺牲精神的建筑师们，他们每一个人牺牲了自己的一些创意，以获得纯粹的设计。同样，这不仅显示了上帝的荣耀，同时也体现了他拯救那些沉醉在自我骄傲中的人们的力量。")]),e._v(" "),v("p",[e._v("对于计算机系统而言，尽管它们通常没有花费几个世纪的时间来构建，但绝大多数系统体现出的概念差异和不一致性远远超过欧洲的大教堂。这通常并不是因为它由不同的设计师们开发，而是由于设计被分成了由若干人完成的若干任务。")]),e._v(" "),v("p",[e._v("我主张在系统设计中，概念完整性应该是最重要的考虑因素。也就是说为了反映一系列连贯的设计思路，宁可省略一些不规则的特性和改进，也不提倡独立和无法整合的系统，哪怕它们其实包含着许多很好的设计。在本章和以下的两章里，我们将解释在编程系统设计中，这个主题的重要性。")]),e._v(" "),v("ul",[v("li",[e._v("如何得到概念的完整性？")]),e._v(" "),v("li",[e._v("这样的观点是否要有一位杰出的精英，或者说是结构设计师的贵族专制，和一群创造性天分和构思被压制的平民编程实现人员？")]),e._v(" "),v("li",[e._v("如何避免结构设计师产出无法实现、或者是代价高昂的技术规格说明，使大家陷入困境？")]),e._v(" "),v("li",[e._v("如何才能与实现人员就技术说明的琐碎细节充分沟通，以确保设计被正确地理解，并精确地整合到产品中？")])]),e._v(" "),v("h2",{attrs:{id:"获得概念的完整性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#获得概念的完整性"}},[e._v("#")]),e._v(" 获得概念的完整性")]),e._v(" "),v("p",[e._v("编程系统（软件）的目的是使计算机更加容易使用。为了做到这一点，计算机装备了语言和各种工具，这些工具实际上也是被调用的程序，受到编程语言的控制。使用这些工具是有代价的：软件外部描述的规模大小是计算机系统本身说明的十倍。用户会发现寻找一个特定功能是很容易的，但相应却有太多的选择，要记住太多的选项和格式。")]),e._v(" "),v("p",[e._v("只有当这些功能说明节约下来的时间，比用在学习、记忆和搜索手册上的时间要少时，易用性才会得到提高。现代编程系统节省的时间的确超过了花费的时间，但是近年来，随着越来越多的功能添加，收益和成本的比率正逐渐地减少。而 IBM 650 使用的容易程度总萦绕在我的脑际，即使该系统没有使用汇编和任何其他的软件。")]),e._v(" "),v("p",[e._v("由于目标是易用性，功能与理解上复杂程度的比值才是系统设计的最终测试标准。单是功能本身或者易于使用都无法成为一个好的设计评判标准。")]),e._v(" "),v("p",[e._v("然而这一点被广泛地误解了。操作系统 OS/360 由于其复杂强大的功能被它的开发者广为推崇。功能，而非简洁，总是被用来衡量设计人员工作的出色程度。而另一方面，PDP-10 的时分系统由于它的简洁和概念的精干被建造它的人员所称道。当然，无论使用任何测量标准，后者的功能与 OS/360 都不在一个数量级。但是，一旦以易用性作为衡量标准，单独的功能和易于使用都是不均衡的，都只达到了真正目标的一半。")]),e._v(" "),v("p",[e._v("对于给定级别的功能，能用最简洁和直接的方式来指明事情的系统是最好的。只有简洁（simplicity）是不够的，Mooers 的 TRAC 语言和 Algol 68 用很多独特的基本概念达到了所需的简洁特性，但它们并不直白（straightforward）。要表达一件待完成的事情，常常需要对基本元素进行意料不到的复杂组合。而且，仅仅了解基本要素和组合规则还不够，还需要学习晦涩的用法，以及在实际工作中如何进行组合。简洁和直白来自概念的完整性。每个部分必须反映相同的原理、原则和一致的折衷机制。在语法上，每个部分应使用相同的技巧；在语义上，应具有同样的相似性。因此，易用性实际上需要设计的一致性和概念上的完整性。")]),e._v(" "),v("h2",{attrs:{id:"贵族专制统治和民主政治"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#贵族专制统治和民主政治"}},[e._v("#")]),e._v(" 贵族专制统治和民主政治")]),e._v(" "),v("p",[e._v("概念的完整性要求设计必须由一个人，或者非常少数互有默契的人员来实现。")]),e._v(" "),v("p",[e._v("而进度压力却要求很多人员来开发系统。有两种方法可以解决这种矛盾。第一种是仔细地区分设计方法和具体实现。第二种是前一章节中所讨论的、一种崭新的组建编程开发团队的方法。")]),e._v(" "),v("p",[e._v("对于非常大型的项目，将设计方法、体系结构方面的工作与具体实现相分离是获得概念完整性的强有力方法。我亲眼目睹了它在 IBM 的 Stretch 计算机和 360 计算机产品线上的巨大成功。但同时我也看到了这种方法在 360 操作系统的开发中，由于缺乏广泛应用所遭受的失败。")]),e._v(" "),v("p",[e._v("系统的体系结构（architecture）指的是完整和详细的用户接口说明。对于计算机，它是编程手册；对于编译器，它是语言手册；对于控制程序，它是语言和函数调用手册；对于整个系统，它是用户要完成自己全部工作所需参考的手册的集合。")]),e._v(" "),v("p",[e._v("因此，系统的结构师，如同建筑的结构师一样，是用户的代理人。结构师的工作，是运用专业技术知识来支持用户的真正利益，而不是维护销售人员所鼓吹的利益。")]),e._v(" "),v("p",[e._v('体系结构同实现必须仔细地区分开来。如同 Blaauw 所说的，"体系结构陈述的是发生了什么，而实现描述的是如何实现。"他举了一个简单的例子——时钟。它的结构包括表面、指针和上发条的旋钮。当一个小孩知道了时钟的外表结构，他很容易从手表或者教堂上的时钟辨认时间。而时钟的实现，描述了表壳中的事物——很多种动力提供装置中的一种，以及众多控制精度方案的一种。')]),e._v(" "),v("p",[e._v("例如，在 System/360 中，一个计算机的结构可以用 9 种不同的模型来实现；而单个实现——Model 30 的数据流、内存和微代码实现——可以用于 4 种不同的体系结构：System/360 计算机、拥有 224 个独立逻辑子通道的复杂通道、选择通道以及 1401 计算机。")]),e._v(" "),v("p",[e._v("同样的划分方法也适用于编程系统。例如，美国的 Fortran IV 标准，是多种编译器所遵循的体系结构标准。该体系结构下有多种可能的实现：以文本为核心、以编译器为核心、快速编译和优化以及侧重语法的实现。相类似的，任何汇编语言和任务控制语言都允许有多种编译器或调度程序的实现。")]),e._v(" "),v("p",[e._v("现在让我们来处理具有浓厚感情色彩的问题——贵族统治和民主政治。结构师难道不是新贵？他们一些智力精英，专门来告诉可怜的实现人员如何工作？是否所有的创造性活动被那些精英单独占有，实现人员仅仅是机器中的齿轮？难道不能遵循民主的理论，从所有的员工中搜集好的创意，以得到更好的产品，而不是将技术说明工作仅限定于少数人？")]),e._v(" "),v("p",[e._v("最后一个问题是最简单的。我当然不认为只有结构师才有好的创意。新的概念经常来自实现者或者用户。然而，我一直试图表达，并且我所有的经验使我确信，系统的概念完整性决定了使用的容易程度。不能与系统基本概念进行整合的良好想法和特色，最好放到一边，不予考虑。如果出现了很多非常重要但不兼容的构想，就应该抛弃原来的设计，对不同基本概念进行合并，在合并后的系统上重新开始。")]),e._v(" "),v("p",[e._v('至于贵族专制统治的问题，必须回答 "是"或者"否"。就必须只能存在少数的结构师而言，答案是肯定的，他们的工作产物的生命周期比那些实现人员的产物要长，并且结构师一直处在解决用户问题，实现用户利益的核心地位。如果要得到系统概念上的完整性，那么必须控制这些概念。这实际上是一种无需任何歉意的贵族专制统治。')]),e._v(" "),v("p",[e._v("第二个问题的答案是否定的，因为外部技术说明的编制工作并是比具体设计实现更富有创造性，它只是一项性质不同的创造工作而已。在给定体系结构下的设计实现，同样需要同编制技术说明一样的创造性、同样新的思路和卓越的才华。实际上，产品的成本性能比很大程度上依靠实现人员，就如同易用性很大程度上依赖结构师一样。")]),e._v(" "),v("p",[e._v('有很多行业和领域中的案例让人相信纪律和规则对行业是有益的。实际上，如同某艺术家的格言所述，"没有规矩，不成方圆。"最差的建筑往往是那些预算远远超过起始目标的项目。巴赫曾被要求每周创作一篇形式严格的歌剧，但这似乎并没有被压制他的创造性。并且，我确信如果 Stretch 计算机有更严格的限制，那么该计算机会拥有更好的体系结构。就我个人意见而言，System/360 Model 30 预算上的限制，完全获益于 Model 75 的体系结构。')]),e._v(" "),v("p",[e._v("类似的，我观察到外部的体系结构规定实际上是增强，而不是限制实现小组的创造性。一旦他们将注意力集中在没有人解决过的问题上，创意就开始奔涌而出。在毫无限制的实现小组中，在进行结构上的决策时，会出现大量的想法和争议，对具体实现的关注反而会比较少。")]),e._v(" "),v("p",[e._v('我曾见过很多次这样的结果，R.W.Conway 也证实了这一点。他在 Cornell 的小组曾编制 PL/I 语言的编译器。他说："最后我们的编译器决定支持不经过改进和增强的语言，因为关于语言的争议已经耗费了我们所有的时间和精力。"')]),e._v(" "),v("h2",{attrs:{id:"在等待时-实现人员应该做什么"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#在等待时-实现人员应该做什么"}},[e._v("#")]),e._v(" 在等待时，实现人员应该做什么？")]),e._v(" "),v("p",[e._v("几百万元的失误是非常令人惭愧的经验，但同时也是让人记忆深刻的教训。当年我们计划和组织编写 OS/360 外部技术说明的那个夜晚，常常重现在我的脑海。我和体系结构经理、程序实现经理一起制订计划进度，并确认责任分工。")]),e._v(" "),v("p",[e._v("体系结构经理拥有 10 个很好的员工，他声称他们可以书写规格说明，并出色地完成任务。该任务需要 10 个月，比所允许的进度多了 3 个月。")]),e._v(" "),v("p",[e._v("程序实现经理有 150 人。他认为在体系结构队伍的协助下，他们可以准备技术说明，并且能按照时间进度，完成高质量的、切合实际的说明。此外，如果光是由体系结构的团队承担该工作，他的 150 人只能坐在那儿干等 10 个月，无所事事。")]),e._v(" "),v("p",[e._v("对此，体系结构的经理的反应是，如果让程序实现队伍来负责该工作，结果不会按时完成，仍将推迟 3 个月，而且质量更加低劣。我将工作分派给了程序实现队伍，其结果也确实如此。体系结构经理的两个结论都得到了证实。另外，概念完整性的缺乏导致系统开发和修改上要付出更昂贵的代价，我估计至少增加了一年的调试时间。")]),e._v(" "),v("p",[e._v("当然，很多因素造成了那个错误的决策，但决定性因素是时间进度和让 150 名编程人员进行工作的愿望。而它也正是我想强调的致命危险。")]),e._v(" "),v("p",[e._v("当建议由体系结构的团队来编写计算机和编程系统的所有外部技术说明时，编程人员提出了三个反对意见：")]),e._v(" "),v("ul",[v("li",[e._v("该说明中的功能过于繁多，而对实际情况中的成本考虑比较少")]),e._v(" "),v("li",[e._v("结构师获得了所有创造发明的快乐，剥夺了实现人员的创造力")]),e._v(" "),v("li",[e._v("当体系结构的队伍缓慢工作时，很多实现人员只能空闲地坐着等待")])]),e._v(" "),v("p",[e._v("这些问题中的第一个确实是一项危险，在下一章中我们将讨论这个问题，但其他的两个问题都是一些简单而纯粹的误解。正如我们前面所看到的，实现同样是一项高级别的创造性活动。具体实现中创造和发明的机会，并不会因为指定了外部技术说明而大为减少，相反创造性活动会因为规范化而得到增强，整个产品也一样。")]),e._v(" "),v("p",[e._v("最后一个反对意见是时间顺序和阶段性上的问题。问题的简要回答是，在说明完成的时候，才雇用编程实现人员。这也正是在搭建一座建筑时所采用的方法。")]),e._v(" "),v("p",[e._v("在计算机这个行业中，节奏非常快，而且常常想尽可能地压缩时间进度，那么技术说明和开发实现能有多少重叠呢？")]),e._v(" "),v("p",[e._v("如同 Blaauw 所指出的，整个创造性活动包括了三个独立的阶段：体系结构（architecture）、设计实现（implementation）、物理实现（realization）。在实际情况中，它们往往可以同时开始和并发地进行。")]),e._v(" "),v("p",[e._v("例如，在计算机的设计中，一旦设计实现人员有了对手册的模糊设想，对技术有了相对清晰的构思以及拥有了定义良好的成本和目标时，工作就可以开始了。他可以开始设计数据流、控制序列、大体的系统划分等等。同时，还需要选用工具以及进行相应的调整，特别是记录存档系统和设计自动化系统。")]),e._v(" "),v("p",[e._v("同时，在物理实现的级别，电路、板卡、线缆、机箱、电源和内存必须分别设计、细化和编制文档。这项工作与体系结构及设计实现并行进行。")]),e._v(" "),v("p",[e._v("在编程系统的开发中，这个原理同样适用。在外部说明完成之前，设计实现人员有很多的事情可以做。只要有一些最终将并入外部说明的系统功能雏形，他就可以开始了。首先，必须设定良好定义的时间和空间目标，了解产品运行的平台配置。接着，他可以开始设计模块的边界、表结构、算法以及所有的工具。另外，还需要花费一些时间和体系结构师沟通。")]),e._v(" "),v("p",[e._v("同时，在物理实现的级别，也有很多可以着手的工作。编程也是一项技术，如果是新型的机器，则在库的调整、系统管理以及搜索和排序算法上，有许多事情需要处理。")]),e._v(" "),v("p",[e._v("概念的完整性的确要求系统只反映唯一的设计理念，用户所见的技术说明来自少数人的思想。实际工作被划分成体系结构、设计实现和物理实现，但这并不意味着该开发模式下的系统需要更长的时间来创建。经验显示恰恰相反，整个系统将会开发得更快，所需要的测试时间将更少。同工作的水平分割相比，垂直划分从根本上大大减少了劳动量，结果是使交流彻底地简化，概念完整性得到大幅提高。")])])}),[],!1,null,null,null);t.default=s.exports}}]);