计费说明和模型支持说明
汇率比例
我们的收费制度为预付费，充值后可以随时使用。

当前比例 > 2023年8月31日更新
美金:人民币 = 1 : 8

定价
Version	Model	Input	Output
GPT-3.5-turbo	4K context	$0.0015 / 1K tokens	$0.002 / 1K tokens
16K context	$0.003 / 1K tokens	$0.004 / 1K tokens
GPT-4	8K context	$0.03 / 1K tokens	$0.06 / 1K tokens
32K context	$0.06 / 1K tokens	$0.12 / 1K tokens
接口支持程度和定价
1 === $0.002 / 1K tokens
1 === ￥0.014 / 1k tokens
补全倍率：GPT3.5 固定为 1.33，GPT4 为 2，与官方保持一致，其他以官方接口返回为准
中文模型价格因为汇率问题会有些许误差

模型	支持	定价倍率	备注
gpt-4	✅	15	需充值$5后联系客服开通
gpt-4-0314	✅	15	需充值$5后联系客服开通
gpt-4-0613	✅	15	需充值$5后联系客服开通
gpt-4-32k	✅	30	需充值$5后联系客服开通
gpt-4-32k-0314	✅	30	需充值$5后联系客服开通
gpt-4-32k-0613	✅	30	需充值$5后联系客服开通
gpt-3.5-turbo	✅	0.75	$0.0015 / 1K tokens
gpt-3.5-turbo-0301	✅	0.75	
gpt-3.5-turbo-0613	✅	0.75	
gpt-3.5-turbo-16k	✅	1.5	$0.003 / 1K tokens
gpt-3.5-turbo-16k-0613	✅	1.5	
gpt-3.5-turbo-instruct	✅	0.75	2023.10.07新增
text-ada-001	✅	0.2	
text-babbage-001	✅	0.25	
text-curie-001	✅	1	
text-davinci-002	✅	10	
text-davinci-003	✅	10	
text-davinci-edit-001	✅	10	
code-davinci-edit-001	✅	10	
whisper-1	✅	15	// $0.006 / minute -> $0.006 / 150 words -> $0.006 / 200 tokens -> $0.03 / 1k tokens
davinci	✅	10	
curie	✅	10	
babbage	✅	10	
ada	✅	10	
text-embedding-ada-002	✅	0.05	
text-search-ada-doc-001	✅	10	
text-moderation-stable	✅	0.1	
text-moderation-latest	✅	0.1	
dall-e	✅	8	
claude-instant-1	❌	0.815	$1.63 / 1M tokens
claude-2	❌	5.51	$11.02 / 1M tokens
ERNIE-Bot(百度)	✅	0.8572	￥0.012 / 1k tokens
ERNIE-Bot-turbo(百度)	✅	0.5715	￥0.008 / 1k tokens
Embedding-V1(百度)	✅	0.1429	￥0.002 / 1k tokens
PaLM-2(google)	✅	1	
chatglm_pro(智谱)	✅	0.7143	￥0.01 / 1k tokens
chatglm_std(智谱)	✅	0.3572	￥0.005 / 1k tokens
chatglm_lite(智谱)	✅	0.1429	￥0.002 / 1k tokens
qwen-turbo(阿里)	✅	0.8572	￥0.012 / 1k tokens，2023.10.07更名
qwen-plus(阿里)	✅	10	￥0.14 / 1k tokens，2023.10.07更名
text-embedding-v1(阿里)	✅	0.05	￥0.0007 / 1k tokens，2023.10.07新增
SparkDesk(讯飞)	✅	1.2858	￥0.018 / 1k tokens
360GPT_S2_V9(360)	✅	0.8572	¥0.012 / 1k tokens
embedding-bert-512-v1(360)	✅	0.0715	¥0.001 / 1k tokens
embedding_s1_v1(360)	✅	0.0715	¥0.001 / 1k tokens
semantic_similarity_s1_v1(360)	✅	0.0715	¥0.001 / 1k tokens
360GPT_S2_V9.4(360)	✅	0.8572	¥0.012 / 1k tokens
充值5美金才能用gpt4的说明
5美金为使用GPT-4的充值门槛，并不是手续费、月费这种费用，充值进去的5美金就是余额，是可以使用的，可以用于调用任意模型。

充值5美金后需要右下角联系客服开通GPT4的权限。

如果不需要GPT-4，充值1美金或注册后就直接可以使用了。

价格会如何调整？
后续我们会视成本调整价格，调整价格会体现在汇率，计费单价和倍率等会一直和官方一样。

其他计费问题
1. 额度是什么？怎么计算的？Oapi的额度计算有问题？
额度 = 分组倍率 * 模型倍率 * （提示 token 数 + 补全 token 数 * 补全倍率）
其中补全倍率对于 GPT3.5 固定为 1.33，GPT4 为 2，与官方保持一致。
如果是非流模式，官方接口会返回消耗的总 token，但是你要注意提示和补全的消耗倍率不一样。
2. 账户额度足够为什么提示额度不足？
请检查你的令牌额度是否足够，这个和账户额度是分开的。
令牌额度仅供用户设置最大使用量，用户可自由设置。