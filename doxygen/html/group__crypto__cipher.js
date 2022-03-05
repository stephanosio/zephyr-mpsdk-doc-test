var group__crypto__cipher =
[
    [ "crypto_driver_api", "structcrypto__driver__api.html", [
      [ "begin_session", "structcrypto__driver__api.html#a97d1349cbce7a6736054c2f53f8e1833", null ],
      [ "crypto_async_callback_set", "structcrypto__driver__api.html#abe59aca855659c2881ce54bb8ad4696d", null ],
      [ "free_session", "structcrypto__driver__api.html#a178e5232a0b20a67c028ac41c3d8655f", null ],
      [ "query_hw_caps", "structcrypto__driver__api.html#a19859cdd9185f5d333fe6893efc27967", null ]
    ] ],
    [ "cipher_ops", "structcipher__ops.html", [
      [ "block_crypt_hndlr", "structcipher__ops.html#a2675dd312be240c24d7d2c0e81bcde2b", null ],
      [ "cbc_crypt_hndlr", "structcipher__ops.html#abc7cf6306467c5aff24ae3faa37902e6", null ],
      [ "ccm_crypt_hndlr", "structcipher__ops.html#af53f5f04fb5e1a7ca148f786d8cfe41f", null ],
      [ "cipher_mode", "structcipher__ops.html#a93c8c2c77d44ea013fbb6e7fd788d4d4", null ],
      [ "ctr_crypt_hndlr", "structcipher__ops.html#ac792113d841e3a6b7dc107d7123162db", null ],
      [ "gcm_crypt_hndlr", "structcipher__ops.html#a570d1ed37d6cce61caa1c6e257f9cdc8", null ]
    ] ],
    [ "ccm_params", "structccm__params.html", [
      [ "nonce_len", "structccm__params.html#adbc306823d339083ec439277a7e35e8a", null ],
      [ "tag_len", "structccm__params.html#a6a0d01056dcc05e2f7dccef25d4c5747", null ]
    ] ],
    [ "ctr_params", "structctr__params.html", [
      [ "ctr_len", "structctr__params.html#a8187ad9553ff8b223f39c14919c48b70", null ]
    ] ],
    [ "gcm_params", "structgcm__params.html", [
      [ "nonce_len", "structgcm__params.html#ae4458a261310577778fca927e7fdc829", null ],
      [ "tag_len", "structgcm__params.html#a4fd478dee1eedfd75ab77e8e63bcbf40", null ]
    ] ],
    [ "cipher_ctx", "structcipher__ctx.html", [
      [ "app_sessn_state", "structcipher__ctx.html#a0439c7f7c300a59296d353e76132c028", null ],
      [ "bit_stream", "structcipher__ctx.html#a99c2676f8cdc9cef7222a01511f9dc3f", null ],
      [ "ccm_info", "structcipher__ctx.html#a3b6f3cdda6344880f3dcc3e2c8246b15", null ],
      [ "ctr_info", "structcipher__ctx.html#a8a7b59087bd474eaad8d996e1600e757", null ],
      [ "device", "structcipher__ctx.html#a44842ea8ece2aaea4d757137cdb67b52", null ],
      [ "drv_sessn_state", "structcipher__ctx.html#a624cf985cf35b3aa8681c3892fd67429", null ],
      [ "flags", "structcipher__ctx.html#a5745811b9b08e6df51f9b8f8b14ceae7", null ],
      [ "gcm_info", "structcipher__ctx.html#a995276020bd2ef77451d941fa3b238d2", null ],
      [ "handle", "structcipher__ctx.html#a81dfa0793e62065a247bd3d5b5bdc903", null ],
      [ "key", "structcipher__ctx.html#a94aaf97ca644ede6b3f1aca165dd1ec0", null ],
      [ "keylen", "structcipher__ctx.html#a10dbfc431a748118c186099c249ed5e4", null ],
      [ "mode_params", "structcipher__ctx.html#ae39bf087a95913630046f99b5db54e63", null ],
      [ "ops", "structcipher__ctx.html#ae3eb86d5be42450b761f89114723b682", null ]
    ] ],
    [ "cipher_pkt", "structcipher__pkt.html", [
      [ "ctx", "structcipher__pkt.html#a26fb877d705580648da03ce95264d100", null ],
      [ "in_buf", "structcipher__pkt.html#a56d2de56d9efc153032eb7f6503748ba", null ],
      [ "in_len", "structcipher__pkt.html#ac5c98e7edafb4b61e01f707c785afbea", null ],
      [ "out_buf", "structcipher__pkt.html#ab95bae428d3d3c80b1b8ee6ea03a05d0", null ],
      [ "out_buf_max", "structcipher__pkt.html#a6e51f941334e87cc966f5a37e783d1fc", null ],
      [ "out_len", "structcipher__pkt.html#abc9588a5f84f9daa13ce4aec965f0a91", null ]
    ] ],
    [ "cipher_aead_pkt", "structcipher__aead__pkt.html", [
      [ "ad", "structcipher__aead__pkt.html#a1b00939c8409041b8202ae90ee01a41c", null ],
      [ "ad_len", "structcipher__aead__pkt.html#a2964d6ffbe02b7088be9a2d5c21a2f9c", null ],
      [ "pkt", "structcipher__aead__pkt.html#a4953711ca04b1c1d17980fff03561d03", null ],
      [ "tag", "structcipher__aead__pkt.html#a3c7a3e72c7d21ec574dd777ac0bdf3c4", null ]
    ] ],
    [ "CAP_ASYNC_OPS", "group__crypto__cipher.html#ga62492a4ce9c9274c78f3a7a915a66983", null ],
    [ "CAP_AUTONONCE", "group__crypto__cipher.html#ga6574dce552f5ba3b6f347e260a57d2f5", null ],
    [ "CAP_INPLACE_OPS", "group__crypto__cipher.html#ga4c00d0513306fbc511fb4828108d37c8", null ],
    [ "CAP_KEY_LOADING_API", "group__crypto__cipher.html#ga18aeace031f8b9bb4241b44f8b36f056", null ],
    [ "CAP_NO_IV_PREFIX", "group__crypto__cipher.html#ga8fa14517853a8a1c4f134b5772f7d308", null ],
    [ "CAP_OPAQUE_KEY_HNDL", "group__crypto__cipher.html#ga821c2629510aad5d591a565767d8abbd", null ],
    [ "CAP_RAW_KEY", "group__crypto__cipher.html#ga95fd2a144207a575b2e0d24d5d6bf85a", null ],
    [ "CAP_SEPARATE_IO_BUFS", "group__crypto__cipher.html#ga858150378de8f024e96614a6c2f138a2", null ],
    [ "CAP_SYNC_OPS", "group__crypto__cipher.html#ga469bae7c354d17ba9b22c7ce4d8e076a", null ],
    [ "block_op_t", "group__crypto__cipher.html#ga584073236a507f736442dedab87b1e17", null ],
    [ "cbc_op_t", "group__crypto__cipher.html#gaa74d09d409b42b29c4c7045dc77552d2", null ],
    [ "ccm_op_t", "group__crypto__cipher.html#ga55e4d15dde1a5134c695ce0c31dabaf7", null ],
    [ "crypto_completion_cb", "group__crypto__cipher.html#ga5bca6057c7fe56b3c6de4399e78e5389", null ],
    [ "ctr_op_t", "group__crypto__cipher.html#gad1ed48328ca31f8ce2dd7e0a166cacba", null ],
    [ "gcm_op_t", "group__crypto__cipher.html#gad27577142dd49308b2470253a41bd09d", null ],
    [ "cipher_algo", "group__crypto__cipher.html#gaa43d9907b508cb28c649aaa524d84424", [
      [ "CRYPTO_CIPHER_ALGO_AES", "group__crypto__cipher.html#ggaa43d9907b508cb28c649aaa524d84424aed0c05202ecbb1496f84ec6c383ddcf0", null ]
    ] ],
    [ "cipher_mode", "group__crypto__cipher.html#gaeedaf8017f8d6518f7dedef365bbae43", [
      [ "CRYPTO_CIPHER_MODE_ECB", "group__crypto__cipher.html#ggaeedaf8017f8d6518f7dedef365bbae43a30ffc1c7c1489f938ed8c567a4fb885e", null ],
      [ "CRYPTO_CIPHER_MODE_CBC", "group__crypto__cipher.html#ggaeedaf8017f8d6518f7dedef365bbae43a98034da3b89ae5c47749c59a3b15bbfd", null ],
      [ "CRYPTO_CIPHER_MODE_CTR", "group__crypto__cipher.html#ggaeedaf8017f8d6518f7dedef365bbae43a58823b401487d57d62a067d71bd2e9d2", null ],
      [ "CRYPTO_CIPHER_MODE_CCM", "group__crypto__cipher.html#ggaeedaf8017f8d6518f7dedef365bbae43a5116e1683b8c9c26582863a65128ce3b", null ],
      [ "CRYPTO_CIPHER_MODE_GCM", "group__crypto__cipher.html#ggaeedaf8017f8d6518f7dedef365bbae43a2f0de7c8f0b9c1a8ac7343ca3ca72c12", null ]
    ] ],
    [ "cipher_op", "group__crypto__cipher.html#ga1db3a5604bff0669672af4457aaaee21", [
      [ "CRYPTO_CIPHER_OP_DECRYPT", "group__crypto__cipher.html#gga1db3a5604bff0669672af4457aaaee21a1e1205f695285034b4889ac19a191617", null ],
      [ "CRYPTO_CIPHER_OP_ENCRYPT", "group__crypto__cipher.html#gga1db3a5604bff0669672af4457aaaee21a71bf6ee186bab1729e24e37c119d0019", null ]
    ] ],
    [ "cipher_begin_session", "group__crypto__cipher.html#ga0720700438ba5819aa826aa37f0c4227", null ],
    [ "cipher_block_op", "group__crypto__cipher.html#ga05a2569f8d404593e053ce69817a457e", null ],
    [ "cipher_callback_set", "group__crypto__cipher.html#ga27804359f0457d98ea506d5088464622", null ],
    [ "cipher_cbc_op", "group__crypto__cipher.html#ga2c4ac483eb4e11110be939e669040700", null ],
    [ "cipher_ccm_op", "group__crypto__cipher.html#ga4886e7e1cc2fcff411066875b35b8b45", null ],
    [ "cipher_ctr_op", "group__crypto__cipher.html#gaeffb9d5dd85bf135eb2cca6d47cb373c", null ],
    [ "cipher_free_session", "group__crypto__cipher.html#gaa818a3de1f2d6319cd21bf6b7caf7cbb", null ],
    [ "cipher_gcm_op", "group__crypto__cipher.html#ga3706b034252e40b818a782c28ba5e485", null ],
    [ "cipher_query_hwcaps", "group__crypto__cipher.html#ga76fed4c6f39182b5d8b77775b1c7f4e0", null ]
];