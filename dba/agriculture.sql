PGDMP  (                     |            postgres    16.1    16.1     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    5    postgres    DATABASE        CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Portuguese_Brazil.1252';
    DROP DATABASE postgres;
                postgres    false            �           0    0    DATABASE postgres    COMMENT     N   COMMENT ON DATABASE postgres IS 'default administrative connection database';
                   postgres    false    4802                        3079    16384 	   adminpack 	   EXTENSION     A   CREATE EXTENSION IF NOT EXISTS adminpack WITH SCHEMA pg_catalog;
    DROP EXTENSION adminpack;
                   false            �           0    0    EXTENSION adminpack    COMMENT     M   COMMENT ON EXTENSION adminpack IS 'administrative functions for PostgreSQL';
                        false    2            �            1259    16398 
   agricultor    TABLE     �  CREATE TABLE public.agricultor (
    id integer NOT NULL,
    cpf_cnpj character varying(20) NOT NULL,
    nome_produtor character varying(100),
    nome_fazenda character varying(50),
    cidade character varying(50),
    estado character varying(50),
    area_total_hectares double precision,
    area_agricultavel_hectares double precision,
    area_vegetacao_hectares double precision,
    culturas_plantadas character varying(100)[]
);
    DROP TABLE public.agricultor;
       public         heap    postgres    false            �            1259    16397    agricultor_id_seq    SEQUENCE     �   CREATE SEQUENCE public.agricultor_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.agricultor_id_seq;
       public          postgres    false    217            �           0    0    agricultor_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.agricultor_id_seq OWNED BY public.agricultor.id;
          public          postgres    false    216            �            1259    24602    dados_agricultor    TABLE     �  CREATE TABLE public.dados_agricultor (
    id integer NOT NULL,
    cpf_cnpj character varying(20) NOT NULL,
    nome_produtor character varying(50),
    nome_fazenda character varying(50),
    cidade character varying(50),
    estado character(2),
    area_total_hectares numeric,
    area_agricultavel_hectares numeric,
    area_vegetacao_hectares numeric,
    culturas_plantadas character varying(50)
);
 $   DROP TABLE public.dados_agricultor;
       public         heap    postgres    false            �            1259    24601    dados_agricultor_id_seq    SEQUENCE     �   CREATE SEQUENCE public.dados_agricultor_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.dados_agricultor_id_seq;
       public          postgres    false    219            �           0    0    dados_agricultor_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.dados_agricultor_id_seq OWNED BY public.dados_agricultor.id;
          public          postgres    false    218                        2604    16401    agricultor id    DEFAULT     n   ALTER TABLE ONLY public.agricultor ALTER COLUMN id SET DEFAULT nextval('public.agricultor_id_seq'::regclass);
 <   ALTER TABLE public.agricultor ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    216    217            !           2604    24605    dados_agricultor id    DEFAULT     z   ALTER TABLE ONLY public.dados_agricultor ALTER COLUMN id SET DEFAULT nextval('public.dados_agricultor_id_seq'::regclass);
 B   ALTER TABLE public.dados_agricultor ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    219    219            �          0    16398 
   agricultor 
   TABLE DATA           �   COPY public.agricultor (id, cpf_cnpj, nome_produtor, nome_fazenda, cidade, estado, area_total_hectares, area_agricultavel_hectares, area_vegetacao_hectares, culturas_plantadas) FROM stdin;
    public          postgres    false    217   ;       �          0    24602    dados_agricultor 
   TABLE DATA           �   COPY public.dados_agricultor (id, cpf_cnpj, nome_produtor, nome_fazenda, cidade, estado, area_total_hectares, area_agricultavel_hectares, area_vegetacao_hectares, culturas_plantadas) FROM stdin;
    public          postgres    false    219   X       �           0    0    agricultor_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.agricultor_id_seq', 1, false);
          public          postgres    false    216            �           0    0    dados_agricultor_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.dados_agricultor_id_seq', 29, true);
          public          postgres    false    218            #           2606    16407 "   agricultor agricultor_cpf_cnpj_key 
   CONSTRAINT     a   ALTER TABLE ONLY public.agricultor
    ADD CONSTRAINT agricultor_cpf_cnpj_key UNIQUE (cpf_cnpj);
 L   ALTER TABLE ONLY public.agricultor DROP CONSTRAINT agricultor_cpf_cnpj_key;
       public            postgres    false    217            %           2606    16405    agricultor agricultor_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.agricultor
    ADD CONSTRAINT agricultor_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.agricultor DROP CONSTRAINT agricultor_pkey;
       public            postgres    false    217            '           2606    24609 .   dados_agricultor dados_agricultor_cpf_cnpj_key 
   CONSTRAINT     m   ALTER TABLE ONLY public.dados_agricultor
    ADD CONSTRAINT dados_agricultor_cpf_cnpj_key UNIQUE (cpf_cnpj);
 X   ALTER TABLE ONLY public.dados_agricultor DROP CONSTRAINT dados_agricultor_cpf_cnpj_key;
       public            postgres    false    219            )           2606    24607 &   dados_agricultor dados_agricultor_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public.dados_agricultor
    ADD CONSTRAINT dados_agricultor_pkey PRIMARY KEY (id);
 P   ALTER TABLE ONLY public.dados_agricultor DROP CONSTRAINT dados_agricultor_pkey;
       public            postgres    false    219            �      x������ � �      �   �   x�]�1� ���q
`�`��؍ؤ�./�D�%�K��Q������o�ZgZ�6h�ZkӠ�]�9�C	0�n3Ƀ��3���P]��Lk>����W=X�u[�bߠ�9�����X`z=Y��H��}4������E,R     