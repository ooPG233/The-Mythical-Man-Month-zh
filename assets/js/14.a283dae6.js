(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{415:function(v,_,p){"use strict";p.r(_);var t=p(56),a=Object(t.a)({},(function(){var v=this,_=v.$createElement,p=v._self._c||_;return p("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[p("h1",{attrs:{id:"第-13-章-整体部分-the-whole-and-the-parts"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#第-13-章-整体部分-the-whole-and-the-parts"}},[v._v("#")]),v._v(" 第 13 章 整体部分（The Whole and the Parts）")]),v._v(" "),p("p",[v._v("我能召唤遥远的精灵。")]),v._v(" "),p("p",[v._v("那又怎么样，我也可以，谁都可以，问题是你真的召唤的时候，它们会来吗？")]),v._v(" "),p("p",[v._v("——莎士比亚，《亨利四世》，第一部分")]),v._v(" "),p("p",[v._v("I can call spirits from the vasty deep.")]),v._v(" "),p("p",[v._v("Why, so can I, or so can any man; but will they come when you do call for them?")]),v._v(" "),p("p",[v._v("——SHAKESPEARE, KING HENRY IV, Part I")]),v._v(" "),p("p",[v._v('和古老的神话里一样，现代神话里也总有一些爱吹嘘的人："我可以编写控制航空货运、拦截弹道导弹、管理银行账户、控制生产线的系统。"对这些人，回答很简单，"我也可以，任何人都可以，但是其他人成功了吗？"')]),v._v(" "),p("p",[v._v("如何开发一个可以运行的系统？如何测试系统？如何将经过测试的一系列构件集成到已测试过、可以依赖的系统？对这些问题，我们以前或多或少地提到了一些方法，现在就来更加系统地考虑一下。")]),v._v(" "),p("h2",{attrs:{id:"剔除-bug-的设计"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#剔除-bug-的设计"}},[v._v("#")]),v._v(" 剔除 bug 的设计")]),v._v(" "),p("p",[v._v("防范 bug 的定义。系统各个组成部分的开发者都会做出一些假设，而这些假设之间的不匹配，是大多数致命和难以察觉的 bug 的主要来源。第 4、5、6 章所讨论的获取概念完整性的途径，就是直接面对这些问题。简言之，产品的概念完整性在使它易于使用的同时，也使开发更容易进行以及 bug 更不容易产生。")]),v._v(" "),p("p",[v._v('上述方法所意味的详尽体系结构设计正是出于这个目的。Bell 实验室安全监控系统项目的 V.A.Vyssotsky 提出，"关键的工作是产品定义。许许多多的失败完全源于那些产品未精确定义的地方。1"细致的功能定义、详细的规格说明、规范化的功能描述说明以及这些方法的实施，大大减少了系统中必须查找的 bug 数量。')]),v._v(" "),p("p",[v._v('测试规格说明。在编写任何代码之前，规格说明必须提交给测试小组，以详细地检查说明的完整性和明确性。如同 Vyssotsky 所述，开发人员自己不会完成这项工作："他们不会告诉你他们不懂。相反，他们乐于自己摸索出解决问题和澄清疑惑的办法。"')]),v._v(" "),p("p",[v._v("自顶向下的设计。在 1971 年的一篇论文中，Niklaus Wirth 把一种被很多最优秀的编程人员所使用的设计流程 2 形式化。尽管他的理念是为了程序设计，同样也完全适用于复杂系统的软件开发设计。他将程序开发划分成体系结构设计、设计实现和物理编码实现，每个步骤可以使用自顶向下的方法很好地实现。")]),v._v(" "),p("p",[v._v("简言之，Wirth 的流程将设计看成一系列精化步骤。开始是勾画出能得到主要结果的，但比较粗略的任务定义和大概的解决方案。然后，对该定义和方案进行细致的检查，以判断结果与期望之间的差距。同时，将上述步骤的解决方案，在更细的步骤中进行分解，每一项任务定义的精化变成了解决方案中算法的精化，后者还可能伴随着数据表达方式的精化。")]),v._v(" "),p("p",[v._v("在这个过程中，当识别出解决方案或者数据的模块时，对这些模块的进一步细化可以和其他的工作独立，而模块的大小程度决定了程序的适用性和可变化的程度。")]),v._v(" "),p("p",[v._v("Wirth 主张在每个步骤中，尽可能使用级别较高的表达方法来表现概念和隐藏细节，除非有必要进行进一步的细化。")]),v._v(" "),p("p",[v._v("好的自顶向下设计从几个方面避免了 bug。首先，清晰的结构和表达方式更容易对需求和模块功能进行精确的描述。其次，模块分割和模块独立性避免了系统级的 bug。另外，细节的隐藏使结构上的缺陷更加容易识别。第四，设计在每个精化步骤的层次上是可以测试的，所以测试可以尽早开始，并且每个步骤的重点可以放在合适的级别上。")]),v._v(" "),p("p",[v._v("当遇到一些意想不到的问题时，按部就班的流程并不意味着步骤不能反过来，直到推翻顶层设计，重新开始整个过程。实际上，这种情况经常发生。至少，它让我们更加清楚在什么时候和为什么抛弃了某个臃肿的设计，并重新开始。一些糟糕的系统往往就是试图挽救一个基础很差的设计，而对它添加了很多表面装饰般的补丁。自顶向下的方法减少了这样的企图。")]),v._v(" "),p("p",[v._v("我确信在十年内，自顶向下进行设计将会是最重要的新型形式化软件开发方法。")]),v._v(" "),p("p",[v._v("结构化编程。另外一系列减少 bug 数量的新方法很大程度上来自 Dijkstra3。Bohm 和 Jacopini 的为其提供了理论证明。")]),v._v(" "),p("p",[v._v("基本上，该方法所设计程序的控制结构，仅包含语句形式的循环结构，例如 DO WHILE，以及 IF...THEN...ELSE 的条件判断结构，而具体的条件部分在 IF...THEN...ELSE 后的花括号中描述。Bohm 和 Jacopini 展示了这些结构在理论上是可以证明的。而 Dijkstra 认为另外一种方法，即通过 GO TO 不加限制的分支跳转，会产生导致自身逻辑错误的结构。")]),v._v(" "),p("p",[v._v("这种方法的基本理念非常优秀，但仍有人提出了一些反面的意见。一些附加的控制结构非常有效，例如，在多个条件下的多路分支（CASE、SWITCH 语句），异常跳转等（GO TO ABNORMAL END）。此外，关于完全避免 GO TO 语句的说法显得有些教条主义，而且似乎有些吹毛求疵。")]),v._v(" "),p("p",[v._v("关键的地方和构建无 bug 程序的核心，是把系统的结构作为控制结构来考虑，而不是独立的跳转语句。这种思考方法是我们在程序设计发展史上向前迈出的一大步。")]),v._v(" "),p("h2",{attrs:{id:"构件单元调试"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#构件单元调试"}},[v._v("#")]),v._v(" 构件单元调试")]),v._v(" "),p("p",[v._v("程序调试过程在过去的二十年中有过很多反复，甚至在某些方面，它们又回到了出发的起点。整个调试过程有四个步骤，跟随这个过程来检验每个步骤各自的动机是一件很有趣的事情。")]),v._v(" "),p("p",[v._v("本机调试。早期的机器的输入和输出设备很差，延迟也很长。典型的情况是，机器采用纸带或者磁带的方式来读写，采用离线设备来完成磁带的准备和打印工作。这使得磁带输入/输出对于调试是不可忍受的。因此，在一次机器交互会话中会尽可能多地包含试验性操作。")]),v._v(" "),p("p",[v._v("在那种情况下，程序员仔细地设计他的调试过程——计划停止的地点，检验内存的位置，需要检查的东西以及如果没有预期结果时的对策。花费在编写调试程序上的时间，可能是程序编制时间的一半。")]),v._v(" "),p("p",[v._v('这个步骤的"重大罪过"是在没有把程序划分成测试段，并对执行终止位置进行计划的前提下，粗暴地按下"开始（START）"。')]),v._v(" "),p("p",[v._v("内存转储。本机调试非常有效。在两小时的交互过程中可能会发现一打问题，但是计算机的资源非常匮乏，成本很高。想象一下计算机时间的浪费，那实在是一件可怕的事情。")]),v._v(" "),p("p",[v._v("因此，当使用在线高速打印机时，测试技术发生了变化。某人持续地运行程序，直到某个检测失败，这时所有的内存都被转储。接着，他将开始艰苦的桌面工作，考虑每个内存位置的内容。桌面工作的时间和本机调试并没有太大的不同，但它的方式比以前更为含混，并且发生在测试执行之后。特定用户调试用的时间更长，因为测试依赖于批处理的周期。总之，整个过程的设计是为了减少计算机的使用时间，从而尽可能满足更多的用户。")]),v._v(" "),p("p",[v._v("快照。采用内存转储技术的机器往往配有 2000 ～ 4000 个字（word 双字节），或者 8K ～ 16K 字节的内存。但是，随着内存的规模不断增长，对整个内存都进行转储变得不大可能。因此，人们开发了有选择的转储、选择性跟踪和将快照插入程序的技术。OS/360 TESTRAN 允许将快照插入程序，无需重新汇编和编译，它是快照技术方向的终极产品。")]),v._v(" "),p("p",[v._v("交互式调试。1959 年，Codd 和他的同事以及 Strachey 都发表了关于协助分时调试工作的论文，提出了一种兼有本机调试方式实时性和批处理调试高效使用率的方法。计算机将多个程序载入到内存中准备运行，被调试的程序和一个只能由程序控制的终端相关联，由监督调度程序控制调试过程。当终端前的编程人员停止程序，检查进展情况或者进行修改时，监督程序可以运行其他程序，从而保证了机器的使用率。")]),v._v(" "),p("p",[v._v("Codd 的多道程序系统已经开发出来，但是它的重点是通过有效地利用输入/输出来提高吞吐量，并没有实现交互式的调试。Strachy 的想法不断得到改进，终于在 1963 年由 MIT 的 Corbato 和他的同事在 7090 的实验性系统上实现。这个开发结果导致了 MULTICS、TSS 和现在其他分时系统的出现。")]),v._v(" "),p("p",[v._v("在最初使用的本机调试方法和现在的交互式调试方法之间，用户可以感觉到的主要差异是工具性软件、调度监控程序和其它相关语言解释编译器的出现。而现在，已经可以用高级语言来编程和调试，高效的编辑工具使修改和快照更为容易。")]),v._v(" "),p("p",[v._v("交互式调试拥有和本机调试一样的操作实时性，但前者并没有象后者要求的那样，在调试过程中要预先进行计划。在某种程度上，像本机调试那样的预先计划显得并不是很必要，因为在调试人员停顿和思考时，计算机的时间并没有被浪费。")]),v._v(" "),p("p",[v._v("不过，Gold 实验得到一个有趣的结果，这个结果显示在每次调试会话中，第一次交互取得的工作进展是后续交互的三倍。这强烈地暗示着，由于缺乏对调试会话的计划，我们没有发掘交互式调试的潜力，原有本机调试技术中那段高效率的时间消失了。")]),v._v(" "),p("p",[v._v("我发现对良好终端系统的正确使用，往往要求每两小时的终端会话对应于两小时的桌面工作。一半时间用于上次会话的清理工作：更新调试日志，把更新后的程序列表加入到项目文件夹中，研究和解释调试中出现的奇怪现象。剩余一半时间用于准备：为下一次操作设计详细的测试，进行计划的变更和改进。如果没有这样的计划，则很难保持两个小时的高生产率；而没有事后的清理工作，则很难保证后续终端会话的系统化和持续推进。")]),v._v(" "),p("p",[v._v("测试用例。关于实际调试过程和测试用例的设计，Grunberger 提出了特别好的对策，在其他的文章中，也有较为简便的方法。")]),v._v(" "),p("h2",{attrs:{id:"系统集成调试"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#系统集成调试"}},[v._v("#")]),v._v(" 系统集成调试")]),v._v(" "),p("p",[v._v("软件系统开发过程中出乎意料的困难部分是系统集成测试。前面我已经讨论了一些困难产生和困难不确定的原因。其中需要再次确认的两件事是：系统调试花费的时间会比预料的更长，需要一种完备系统化和可计划的方法来降低它的困难程度。下面来看看这样的方法所包括的内容。")]),v._v(" "),p("p",[v._v("使用经过调试的构件单元。尽管并不是普遍的实际情况——不过通常的看法是——系统集成调试要求在每个部分都能正常运行之后开始。")]),v._v(" "),p("p",[v._v('实际工作中，存在着与上面看法不同的两种情况。一种是"合在一起尝试"的方法，这种方法似乎是基于这样的观点：除了构件单元上的 bug 之外，还存在系统 bug（如接口），越早将各个部分合拢，系统 bug 出现得越早。另一种观念则没有这么复杂：使用系统的各个部分进行相互测试，避免了大量测试辅助平台的搭建工作。这两种情况显然都是合理的，但经验显示它们并不完全正确——使用完好的、经过调试的构件，能比搭建测试平台和进行全面的构件单元测试节省更多的时间。')]),v._v(" "),p("p",[v._v('更微妙的一种方法是"文档化的 bug"。它申明构件单元所有的缺陷已经被发现，还没有被修复，但已经做好了系统调试的准备。在系统测试期间，依照该理论，测试人员知道这些缺陷造成的后果，从而可以忽略它们，将注意力集中在新出现的问题上。')]),v._v(" "),p("p",[v._v("但是所有这些良好的愿望只是试图为结果的偏离寻找一些合理理由。实际上，调试人员并不了解 bug 引起的所有后果；不过，如果系统比较简单，系统测试倒不会太困难。另外，对文档记录 bug 的修复工作本身会注入未知的问题，接下来的系统测试会令人困惑。")]),v._v(" "),p("p",[v._v("搭建充分的测试平台。这里所说的辅助测试平台，指的是供调试使用的所有程序和数据，它们不会整合到最终产品中。测试平台可能会有相当于测试对象一半的代码量，但这是合乎情理的。")]),v._v(" "),p("p",[v._v("一种测试辅助的形式是伪构件（dummy component），它仅仅由接口和可能的伪数据或者一些小的测试用例组成。例如，系统包含某种排序程序，但该程序还未完成，这时其他部分的测试可以通过伪构件来实现，该构件读入输入数据，对数据格式进行校验，输出格式良好、但没有实际意义的有序数据以供使用。")]),v._v(" "),p("p",[v._v("另一种形式是微缩文件（miniature file）。很常见的一类 bug 来自对磁带和磁盘文件格式的错误理解。所以，创建一个仅包含典型记录，但涵盖全部描述的小型文件是非常值得的。")]),v._v(" "),p("p",[v._v("微缩文件的特例是伪文件（dummy file），实际上并不常见。不过 OS/360 任务控制语言提供了这种功能，对于构件单元调试非常有用。")]),v._v(" "),p("p",[v._v("还有一种方式是辅助程序（auxiliary program）。用来测试数据发生器、特殊的打印输出、交叉引用表分析等，这些都是需要另外开发的专用辅助工具的例子。")]),v._v(" "),p("p",[v._v("控制变更。对测试期间进行严密控制是硬件调试中一项令人印象深刻的技术，它同样适用于软件系统。")]),v._v(" "),p("p",[v._v("首先，必须有人负责。他必须控制和负责各个构件单元的变更或者版本之间的替换。")]),v._v(" "),p("p",[v._v("接着，就像前面所讨论的，必须存在系统的受控拷贝：一个是供构件单元测试使用的最终锁定版本；一个是测试版本的拷贝，用来进行缺陷的修复；以及一个安全版本，其他人员可以在该拷贝上工作，进行各自的程序开发工作，例如修复和扩展自己的模块和子系统等。")]),v._v(" "),p("p",[v._v("在 System/360 工程模型中，在一大堆常规的黄颜色电线中，常常可以不经意地看到紫色的电线束。在发现 bug 以后，我们会做两件事情：设计快速修复电路，并安装到系统，从而不会妨碍测试的继续进行。这些更改过的接线使用紫色电线，看上去就像伸着一个受了伤的大拇指。我们需要把更改记录到日志中，同时，还要准备一份正式的变更文档，并启动设计自动化流程。最后，在电路图或者黄色线路中会实现该设计的调整——更新相应的电路图和接线表，以及开发一个新的电路板。现在，物理模型和电路图重新吻合了，紫色的线束也就不再需要了。")]),v._v(" "),p("p",[v._v('软件开发也需要用到"紫色线束"的手法。对于最后成为产品的程序代码，它更迫切地需要进行严密控制和深层次的关注。上述技巧的关键因素是对变更和差异的记载，即在一个日志中记录所有的变更，而在源代码中显著标记快速补丁和正式修改之间的区别，正式修改是完备并经过测试的，而且需要文档化。')]),v._v(" "),p("p",[v._v("一次添加一个构件。这样做的好处同样是显而易见的，但是乐观主义和惰性常常诱使我们破坏这个规则。因为离散构件的添加需要调试伪程序和其他测试平台，有很多工作要做。毕竟，可能我们不需要这些额外工作？可能不会出现什么 bug？")]),v._v(" "),p("p",[v._v("不！拒绝诱惑！这正是系统测试所关注的方面。我们必须假设系统中存在着许多错误，并需要计划一个有序的过程把它们找出来。")]),v._v(" "),p("p",[v._v("注意必须拥有完整的测试用例，在添加了新构件之后，用它们来测试子系统。因为那些原来可以在子系统上成功运行的用例，必须在现有系统上重新运行，对系统进行回归测试。")]),v._v(" "),p("p",[v._v("阶段（量子）化、定期变更。随着项目的推进，系统构件的开发者会不时出现在我们面前，带着他们工作的最新版本——更快、更卓越、更完整，或者公认 bug 更少的版本。将使用中的构件替换成新版本，仍然需要进行和构件添加一样的系统化测试流程。这个时候通常已经具备了更完整有效的测试用例，因此测试时间往往会减少很多。")]),v._v(" "),p("p",[v._v("项目中，其他开发团队会使用经过测试的最新集成系统，作为调试自己程序的平台。测试平台的修改，会阻碍他们的工作。当然，这是必须的。但是，变更必须被阶段化，并且定期发布。这样，每个用户拥有稳定的生产周期，其中穿插着测试平台的改变。这种方法比持续波动所造成的混乱无序要好一些。")]),v._v(" "),p("p",[v._v("Lehman 和 Belady 出示了证据，阶段（量子）要么很大，间隔很宽；要么小而频繁。根据他们的模型，小而频繁的阶段很容易变得不稳定，我的经验也同样证实了这一点——因此我决不会在实践中冒险采用后一种策略。")]),v._v(" "),p("p",[v._v("量子（阶段）化变更方法非常优美地容纳了紫色线束技术：直到下一次系统构件的定期发布之前，都一直使用快速补丁；而在当前的发布中，把已经通过测试并进行了文档化的修补措施整合到系统平台。")])])}),[],!1,null,null,null);_.default=a.exports}}]);